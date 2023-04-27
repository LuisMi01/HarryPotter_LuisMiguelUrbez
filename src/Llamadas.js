'use strict'

async function buscarPersonaje() {
    let id = parseInt(document.getElementById('input-busqueda').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }

    try {
        let res = await fetch('http://localhost:3003/personaje/' + id);
        let personaje = await res.json();
        console.log(personaje);

        let resultadosDOM = document.getElementById('resultados');
        resultadosDOM.innerHTML = '';

        let div = document.createElement('div');
        let pNombre = document.createElement('p');
        pNombre.innerText = `Nombre: ${personaje.name}`;
        let pDesc = document.createElement('p');
        pDesc.innerText = `Descripción: ${personaje.desc}`;
        let pId = document.createElement('p');
        pId.innerText = `Id personaje: ${personaje.id}`;

        div.appendChild(pNombre);
        div.appendChild(pDesc);
        div.appendChild(pId);
        resultadosDOM.appendChild(div);
    } catch (error) {
        console.error(error);
        alert('Error al buscar el personaje. Por favor, inténtelo de nuevo más tarde.');
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);

})

/*
async function cargarPersonajes() {
    let res = await fetch('http://localhost:3003/personaje');
    let personajes = await res.json();

    let personajesDOM = document.getElementById('resultados');

    try {
        personajes.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element.id;
            personajesDOM.appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
}

window.onload = () => {
    cargarPersonajes().then(r => console.log('Personajes cargados'));
}*/
