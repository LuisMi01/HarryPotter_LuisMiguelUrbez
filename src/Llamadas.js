'use strict'

document.addEventListener('DOMContentLoaded', async function () {
    await cargarPersonajes();
    document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);
});


async function buscarPersonaje() {
    let id = parseInt(document.getElementById('input-busqueda').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }

    let res = await fetch(`http://localhost:3003/personajes/${id}`);
    let personaje = await res.json();

    let resultadosDOM = document.getElementById('resultados');
    resultadosDOM.innerHTML = '';


        let ul = document.createElement('ul');
        let liNombre = document.createElement('li');
        liNombre.innerHTML = `Nombre: ${personaje.name}`;
        let liDesc = document.createElement('li');
        liDesc.innerHTML = `Descripcion: ${personaje.desc}`;
        let liId = document.createElement('li');
        liId.innerHTML = `Id: ${personaje.id}`;

        ul.appendChild(liNombre);
        ul.appendChild(liDesc);
        ul.appendChild(liId);
        resultadosDOM.appendChild(ul);

}


async function cargarPersonajes() {
    let res = await fetch('http://localhost:3003/personajes');
    let personajes = await res.json();

    let personajesDOM = document.getElementById('resultados');
    personajesDOM.innerHTML = '';

    try {
        personajes.forEach((personaje) => {
            let ul = document.createElement('ul');
            let liNombre = document.createElement('li');
            liNombre.innerHTML = `Nombre: ${personaje.name || ''}`;
            let liDesc = document.createElement('li');
            liDesc.innerHTML = `Descripcion: ${personaje.desc || ''}`;
            let liId = document.createElement('li');
            liId.innerHTML = `Id: ${personaje.id || ''}`;


            ul.appendChild(liNombre);
            ul.appendChild(liDesc);
            ul.appendChild(liId);
            personajesDOM.appendChild(ul);
        });
    } catch (err) {
        console.log(err);
    }
}
