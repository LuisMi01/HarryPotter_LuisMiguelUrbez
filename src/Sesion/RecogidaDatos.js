'use strict'

// Obtener el botón
const boton = document.getElementById("boton-enviar");

// Agregar un evento click al botón
boton.addEventListener("click", function() {

    // Obtener los valores de los campos de texto
    const nombre = document.getElementById("nombre").value;
    const pass = document.getElementById("password").value;


    // Validar que se hayan ingresado valores en los campos
    if(nombre === '' || pass === '') {
        alert('Por favor complete todos los campos.');
        return;
    }

    // Crear objeto con los datos ingresados
    const datos = {
        nombre: nombre,
        password: pass,
    };

    // Enviar los datos al servidor (aquí debes agregar tu propia lógica para enviar los datos al servidor)
    console.log(datos);
    enviarDatosAlServidor(datos);

});

const enviarDatosAlServidor = (datos) => {
    fetch('https://localhost:3002/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => {
            if(response.ok) {
                // Aquí se pueden tomar acciones en caso de que el envío sea exitoso
                console.log('Datos enviados al servidor correctamente');
            } else {
                // Aquí se pueden tomar acciones en caso de que el envío falle
                console.error('Error al enviar los datos al servidor');
            }
        })
        .catch(error => {
            // Aquí se pueden tomar acciones en caso de que ocurra un error
            console.error('Error en la petición fetch', error);
        });
}









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