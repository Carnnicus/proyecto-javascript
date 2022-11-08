
const juegoElegido = document.getElementById("steam")
const buscar = document.getElementById("btnSteam")
const todos = document.getElementById('btnTodos')



const listarTodos = (games) => {
    let juegos = document.getElementById("steamGames")
    juegos.innerHTML = ""
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
    let ingreso = document.getElementById("steam").value.toUpperCase()
    let juegos = document.getElementById("steamGames")
    fetch("../data/juegos.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const filtro = data.filter(juego => juego.nombre === ingreso)
        if (filtro.length > 0){
            filtro.forEach(juego => {
                juegos.innerHTML =`<hr>
                    <p>Nombre: ${juego.nombre}</p>
                    <p>Lanzamiento: ${juego.lanzamiento}</p>
                    <p>Link: ${juego.link}</p>
                    <hr>`
            })
        }else{
            swal('El juego no existe')
        }
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

todos.addEventListener('click', getArr)
buscar.addEventListener('click', buscador)


