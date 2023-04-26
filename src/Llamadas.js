'use strict'
async function cargarPersonajes(){
    let res = await fetch('http://localhost:3003/personajes')
    let personajes = await res.text();

    let personajesDOM = document.getElementById('resultados');

    try{
        personajes = JSON.parse(personajes);

        personajes.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = personajes.name;
            personajesDOM.appendChild(li);
        });

    }catch(err){
        console.log(err);
    }
}

window.onload = () => {
    cargarPersonajes().then(r => console.log('Personajes cargados'));
}