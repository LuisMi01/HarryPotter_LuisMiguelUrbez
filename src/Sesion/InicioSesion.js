'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');

const app = express();

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
    return jwt.sign(payload, 'mysecretkey', { expiresIn: '2h' });
}
app.get('/', (req, res) => {
    res.send('Bienvenido al localhost:3002, para moverte entre la base de datos de usuarios y contraseñas puedes usar /login y /protected')
})

app.post('/login', (req, res) => {

    res.send('Usuarios del inicio de sesion:')
    const { username, password } = req.body;

    // Buscamos el usuario en la base de datos
    const nuevoUser = users.find(user => user.username === username);

    if (!nuevoUser) {
        return res.status(401).json({ message: 'Usuario no encontrado o no existe aun' });
    }

    // Comprobamos la contraseña cifrada
    const passwordHash = hashSHA1(password);
    if (nuevoUser.passwordHash !== passwordHash) {
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

app.listen(3002)