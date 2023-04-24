'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');

const app = express();
const port = 3000;

// Simulación de base de datos
const users = [
    { username: 'user1', passwordHash: 'f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0' }, // password: password1
    { username: 'user2', passwordHash: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12' }  // password: password2
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bearerToken());

// Función para cifrar una cadena de texto con SHA1
function hashSHA1(text) {
    return crypto.createHash('sha1').update(text).digest('hex');
}

// Función para generar un token JWT
function generateToken(payload) {
    return jwt.sign(payload, 'mysecretkey', { expiresIn: '1h' });
}

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Buscamos el usuario en la base de datos
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Comprobamos la contraseña cifrada
    const passwordHash = hashSHA1(password);
    if (user.passwordHash !== passwordHash) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generamos y devolvemos el token JWT
    const token = generateToken({ username });
    res.json({ token });
});

// Ruta protegida
app.get('/protected', (req, res) => {
    // Validamos el token recibido en la cabecera Authorization
    const token = req.token;
    try {
        const decoded = jwt.verify(token, 'mysecretkey');
        res.json({ message: 'Acceso concedido' });
    } catch (err) {
        res.status(401).json({ message: 'Token inválido' });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});