const unidades = [
    {unidad: "Intercessor Pesado", puntos: 5},
    {unidad: "Intercessor de Asalto", puntos: 4},
    {unidad: "Sargento Erradicador", puntos: 20},
    {unidad: "Guardia Sanguinario", puntos: 10},
    {unidad: "Capitan", puntos: 20},
    {unidad: "Teniente", puntos: 15},
    {unidad: "Dreadnought", puntos: 60},
    {unidad: "Leman Russ Tank", puntos: 100},
    {unidad: "Primarca", puntos: 200}
]

function tablaUnidades(){
    let unit = document.getElementById("unit").value
    let armyTable = document.getElementById("tablaEjercito")
    let unidad = Object.values(unidades[unit])
    armyTable.innerHTML += `<td style="border: solid black;">${unidad[0]}</td>
    <td style="border: solid black; text-align: center;">${unidad[1]}</td>`

    let total = 0
    let par = document.getElementById('par')
    let sumCeldas = document.querySelectorAll('td + td')
    for (let i = 0; i <= sumCeldas.length; i += 1){
        total += parseFloat(sumCeldas[i].firstChild.data)
        par.innerHTML = `El total de tus puntos de ejército es: <span style="color: red;">${total}</span>`
    }

}

let addUnit = document.getElementById("addUnit")
addUnit.addEventListener('click', tablaUnidades)

