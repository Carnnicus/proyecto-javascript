function lista(){
    let unit = document.getElementById("unit").value
    let armylist = document.getElementById("listaEjercito")
    armylist.innerHTML += `<li>${unit}</li>`
}

let addUnit = document.getElementById("addUnit")
addUnit.addEventListener('click', lista)