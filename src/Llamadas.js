window.addEventListener('load', () => {
    let p = new URLSearchParams(document.location.search)
    let res = p.get('id')

    let marco = document.getElementById('resultados')

    fetch('http://localhost:3003' + res)
        .then(res => res.json())
        .then(marco => {
            marco.innerText = marco.id
        })
})