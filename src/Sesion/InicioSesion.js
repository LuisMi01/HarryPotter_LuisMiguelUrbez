const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bearerToken = require('express-bearer-token');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bearerToken());

function hashSHA1(text) {
    return crypto.createHash('sha1').update(text).digest('hex');
}

function generateToken(payload) {
    return jwt.sign(payload, 'mysecretkey', { expiresIn: '2h' });
}

const users = [
    {
        username: 'user1',
        passwordHash: hashSHA1('password1')
    },
    {
        username: 'user2',
        passwordHash: hashSHA1('password2')
    }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const nuevoUser = Users.tablaUsuarios.find(user => user.username === username);

    if (!nuevoUser) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }
    const passwordHash = hashSHA1(password);
    if (nuevoUser.passwordHash !== passwordHash) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    const token = generateToken({ username });
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const token = req.token;
    try {
        const decoded = jwt.verify(token, 'mysecretkey');
        res.json({ message: 'Acceso concedido' });
    } catch (err) {
        res.status(401).json({ message: 'Token inválido' });
    }
});
app.listen(3002)
