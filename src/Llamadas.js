

async function buscarPersonaje() {
    let resultadosDOM = document.getElementById('resultados');
    let id = parseInt(document.getElementById('input-busqueda').value);
    if (isNaN(id)) {
        alert('Debe ingresar un número válido');
        return;
    }

    try {
        let res = await fetch('http://localhost:3003/pelicula/' + id);
        let personaje = await res.json();
        console.log(personaje);

        resultadosDOM.innerText = '';

        let padre = document.createElement('div');
        let pNombre = document.createElement('p');
        pNombre.innerText = `Titulo: ${personaje.title}`;
        let pDesc = document.createElement('p');
        pDesc.innerText = `Duracion (min): ${personaje.length}`;
        let pId = document.createElement('p');
        pId.innerText = `Id pelicula: ${personaje.id}`;
        let pDirector = document.createElement('p');
        pDirector.innerText = `Fecha: ${personaje.year}`;


        padre.appendChild(pNombre);
        padre.appendChild(pDesc);
        padre.appendChild(pId);
        padre.appendChild(pDirector);
        resultadosDOM.appendChild(padre);

    } catch (error) {
        console.error(error);
        alert('Error al buscar el personaje. Por favor, inténtelo de nuevo más tarde.');
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('buscar-btn').addEventListener('click', buscarPersonaje);
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




