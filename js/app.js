let primarcas = [
    {primarca: "Lion El'Jonson",
     numero: 1,
     legion: "Angeles Oscuros",
     condicion: "Leal",
    },
    {primarca: "Desconocido",
     numero:2,
     legion: "Desconocido",
     condicion: "Purgado",
    },
    {primarca: "Fulgrim",
    numero: 3,
     legion: "Hijos Del Emperador",
     condicion: "Traidor"
    },
    {primarca: "Perturabo",
     numero: 4,
     legion: "Guerreros De Hierro",
     condicion: "Traidor",
    },
    {primarca: "Jaghatai Khan",
     numero: 5,
     legion: "Cicatrices Blancas",
     condicion: "Leal",
    },
    {primarca: "Leman Russ",
     numero: 6,
     legion: "Lobos Espaciales",
     condicion: "Leal",
    },
    {primarca: "Rogal Dorn",
     numero: 7,
     legion: "Puños Imperiales",
     condicion: "Leal",
    },
    {primarca: "Konrad Curze",
     numero: 8,
     legion: "Amos De La Noche",
     condicion: "Traidor"
    },
    {primarca: "Sanguinius",
     numero: 9,
     legion: "Angeles Sangrientos",
     condicion: "Leal",
    },
    {primarca: "Ferrus Manus",
     numero: 10,
     legion: "Manos De Hierro",
     condicion: "Leal",
    },
    {primarca: "Desconocido",
     numero: 11,
     legion: "Desconocido",
     condicion: "Purgado",
    },
    {primarca: "Angron",
     numero: 12,
     legion: "Devoradores De Mundos",
     condicion: "Traidor",
    },
    {primarca: "Roboute Guilliman",
     numero: 13,
     legion: "Ultramarines",
     condicion: "Leal",
    },
    {primarca: "Mortarion",
     numero: 14,
     legion: "Guardia De La Muerte",
     condicion: "Traidor",
    },
    {primarca: "Magnus El Rojo",
     numero: 15,
     legion: "Mil Hijos",
     condicion: "Traidor",
    },
    {primarca: "Horus Lupercal",
     numero: 16,
     legion: "Lobos Lunares",
     condicion: "Traidor",
    },
    {primarca: "Lorgar Aureliano",
     numero: 17,
     legion: "Portadores De La Palabra",
     condicion: "Traidor",
    },
    {primarca: "Vulkan",
     numero: 18,
     legion: "Salamandras",
     condicion: "Leal",
    },
    {primarca: "Corvus Corax",
     numero: 19,
     legion: "Guardia Del Cuervo",
     condicion: "Leal",
    },
    {primarca: "Alpharius Omegon",
     numero: 20,
     legion: "Legion Alfa",
     condicion: "Traidor",
    },
]
function guardarLocalStorage(){
    localStorage.setItem("Primarcas y Legiones", JSON.stringify(primarcas))
}
guardarLocalStorage()

function obtenerLocalStorage(){
    let getSto = JSON.parse(localStorage.getItem("Primarcas y Legiones"))
    console.table(getSto)
}

obtenerLocalStorage()

function aleatorio(n1, n2) {
    return Math.round(Math.random() * (n2 - n1) + parseInt(n1));
}

function randomPrimarch(){
    primarcaAleatorio = aleatorio(1, 20)
    let primarca = Object.values(primarcas[primarcaAleatorio])
    let nombre = document.getElementById("primarch1")
    nombre.innerHTML = `Primarca: ${primarca[0]}`
    let legion = document.getElementById("legion1")
    legion.innerHTML = `Legion: ${primarca[2]}`
    let condicion = document.getElementById("condicion1")
    condicion.innerHTML = `Condicion: ${primarca[3]}`
}

function primarchSelected(){
    for (i = 0; i < primarcas.length; i += 1){
        let primarca = Object.values(primarcas[i])
        let selected = document.getElementById("selected")
        if (primarca[0] === selected.value ){
            let nombre = document.getElementById("primarch")
            nombre.innerHTML = `Primarca: ${primarca[0]}`
            let legion = document.getElementById("legion")
            legion.innerHTML = `Legion: ${primarca[2]}`
            let condicion = document.getElementById("condicion")
            condicion.innerHTML = `Condicion: ${primarca[3]}`
        }
    }
}

/**function crearMarine(nombre, legion, habilidad){
    this.nombre = nombre
    this.legion = legion
    this.habilidad = habilidad
}

console.log("-----CREE SU MARINE ESPACIAL-----")

let nombre = prompt("Ingrese el nombre de su Marine Espacial: ")
let legion = prompt("A que legión le gustaría pertenecer?: ")
let habilidad= prompt("Que habilidad tiene su marine?: ")

let marine = new crearMarine(nombre, legion, habilidad)
console.table(marine)

function elegirLegion(){
    let legionSelector = document.getElementById("legionSelector")
    let legionElegida = legionSelector.value 
    document.getElementById("legionSeleccionada").innerText = `${legionElegida}`
}

/**const ejercito = [
    {nombre: "Intercessor Pesado", puntos: 5},
    {nombre: "Intercessor De Asalto", puntos: 4},
    {nombre:"Sargento Erradicador", puntos: 20},
    {nombre:"Guardia Sanguinario", puntos: 10},
    {nombre:"Capitan", puntos: 20},
    {nombre:"Teniente", puntos: 15},
    {nombre:"Dreadnought", puntos: 60},
    {nombre:"Leman Russ Tank", puntos: 100},
    {nombre:"Primarca", puntos: 200}
]

switch (army){
    case "1": 
        let armySelector = document.getElementById("armySelector")
        let selectedArmy = armySelector.value

}


function elegirUnidad(){
    let armySelector = document.createElement("select")
    let armyElegida = armySelector.value 
    let li1 = document.createElement("li")
    let l1Army = document.createTextNode(armyElegida)
    ol.appendChild(l1Army)
}**/





 


