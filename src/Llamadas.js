'use strict'
/*async function cargarPersonajes(){
    let res = await fetch('http://localhost:3003/personajes')
    let personajes = await res.text();

    let personajesDOM = document.getElementById('resultados');

    try{
        personajes = JSON.parse(personajes);

        personajes.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element.name;
            personajesDOM.appendChild(li);
        });

    }catch(err){
        console.log(err);
    }
}*/
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

    if (personaje) {
        let ul = document.createElement('ul');
        let liNombre = document.createElement('li');
        liNombre.innerHTML = `Nombre: ${personaje.name}`;
        let liDesc = document.createElement('li');
        liDesc.innerHTML = `Descripcion: ${personaje.desc}`;
        let liId = document.createElement('li');
        liId.innerHTML = `Género: ${personaje.id}`;

        ul.appendChild(liNombre);
        ul.appendChild(liDesc);
        ul.appendChild(liId);
        resultadosDOM.appendChild(ul);
    } else {
        resultadosDOM.innerHTML = 'No se encontró ningún personaje con ese ID';
    }
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
            liNombre.innerHTML = `Nombre: ${personaje.name}`;
            let liDesc = document.createElement('li');
            liDesc.innerHTML = `Descripcion: ${personaje.desc}`;
            let liId = document.createElement('li');
            liId.innerHTML = `Género: ${personaje.id}`;

            ul.appendChild(liNombre);
            ul.appendChild(liDesc);
            ul.appendChild(liId);
            personajesDOM.appendChild(ul);
        });
    } catch (err) {
        console.log(err);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);
});

document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);
