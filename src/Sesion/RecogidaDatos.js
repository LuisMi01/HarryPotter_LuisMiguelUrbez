'use strict'
const recogerDatos = () => {
    const user = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    return { user, password };
};

const enviarDatosAlServidor = (datos) => {
    fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => {
            if (response.ok) {
                console.log('Datos enviados al servidor correctamente');
                console.log(datos)
                window.location.href = "Combate/IndexCombate.html";
            } else {
                console.error('Error al enviar los datos al servidor');
            }
        })
        .catch(error => {
            console.error('Error en la petición fetch', error);
        });
};

const form = document.getElementById('formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const datos = recogerDatos();
    enviarDatosAlServidor(datos);
});


/*
//const form = document.querySelector('.login-form');
console.log(form);


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const { token } = await response.json();
        localStorage.setItem('token', token);
        window.location.href = '/protected';
    } catch (error) {
        console.error(error);
        alert('Error al iniciar sesión');
    }
});
*/