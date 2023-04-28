'use strict'
alert('¡Hola! Bienvenido al proyecto de Harry Potter API realizado por Luis Miguel Urbez Villar')
alert('Los puertos a utilizar para la primeras partes de la api (peliculas y personajes) es el 3003, para el login y combate es el 3002, ¡Que la magia te acompañe!')
async function buscarPersonaje() {
    let resultadosDOM = document.getElementById('resultados2');
    let id = parseInt(document.getElementById('input-busqueda2').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }
    try {
        let res = await fetch('http://localhost:3003/personaje/' + id);
        let personaje = await res.json();
        console.log(personaje);

        resultadosDOM.innerHTML = "";

        let p2 = document.createElement('p');
        p2.innerHTML = 'Id: ' + personaje[0].id;
        resultadosDOM.appendChild(p2);

        let p = document.createElement('p');
        p.innerHTML = 'Nombre: ' + personaje[0].name;
        resultadosDOM.appendChild(p);

        let p3 = document.createElement('p');
        p3.innerHTML = 'Descripcion: ' + personaje[0].desc;
        resultadosDOM.appendChild(p3);

    }catch (error) {
        console.error(error);
        alert("El id es incorrecto, por favor introduzca numeros entre el 0 y 64 (incluidos)")    }
}


async function buscarPelicula() {
    let resultadosDOM = document.getElementById('resultados');
    let id = parseInt(document.getElementById('input-busqueda').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }

    try {
        let res = await fetch('http://localhost:3003/pelicula/' + id);
        let pelicula = await res.json();
        console.log(pelicula);

        resultadosDOM.innerHTML = "";

        let p2 = document.createElement('p');
        p2.innerHTML = 'Id: ' + pelicula[0].id;
        resultadosDOM.appendChild(p2);

        let p = document.createElement('p');
        p.innerHTML = 'Titulo: ' + pelicula[0].title;
        resultadosDOM.appendChild(p);

        let p3 = document.createElement('p');
        p3.innerHTML = 'Descripcion: ' + pelicula[0].sinopsis;
        resultadosDOM.appendChild(p3);

        let p4 = document.createElement('p');
        p4.innerHTML = 'Fecha: ' + pelicula[0].year;
        resultadosDOM.appendChild(p4);

        let p5 = document.createElement('p');
        p5.innerHTML = 'Duracion (min): ' + pelicula[0].length;
        resultadosDOM.appendChild(p5);





    } catch (error) {
        console.error(error);
        alert("El id es incorrecto, por favor introduzca numeros entre el 0 y 7 (incluidos)")
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('buscar-btn').addEventListener('click', buscarPelicula);
    document.getElementById('buscar-btn2').addEventListener('click', buscarPersonaje);
});


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




