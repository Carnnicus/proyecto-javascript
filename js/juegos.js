
const juegoElegido = document.getElementById("steam")
const buscar = document.getElementById("btnSteam")
const todos = document.getElementById('btnTodos')



const listarTodos = (games) => {
    let juegos = document.getElementById("steamGames")

    games.forEach(y => {
        const {nombre, lanzamiento, link} = y

        juegos.innerHTML += `
        <hr>
        <p>Nombre: ${nombre}</p>
        <p>Lanzamiento: ${lanzamiento}</p>
        <p>Link: ${link}</p>
        <hr>`
    });
}

function buscador(){
    let ingreso = document.getElementById("steam").value
    let juegos = document.getElementById("steamGames")
    fetch("../data/juegos.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        data.forEach(x =>{
            if(x.nombre == ingreso.toUpperCase()){
                juegos.innerHTML =`<hr>
        <p>Nombre: ${x.nombre}</p>
        <p>Lanzamiento: ${x.lanzamiento}</p>
        <p>Link: ${x.link}</p>
        <hr>`
            }else{
                swal("El juego no existe")
            }
        })
    }) 
        
    .catch((err) => console.log(err))
}

const getArr = () => {
    fetch("../data/juegos.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        listarTodos(data)
    })
    .catch((err) => console.log(err))
}

function btnOff(){
    btnTodos = document.getElementById("btnTodos")
    btnTodos.disabled = true
}

todos.addEventListener('click', getArr)
todos.addEventListener('click', btnOff)
buscar.addEventListener('click', buscador)


