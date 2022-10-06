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

console.table(primarcas)

function aleatorio(n1, n2) {
    return Math.round(Math.random() * (n2 - n1) + parseInt(n1));
}

let elegir = prompt("Si quiere elegir un primarca presione 1, si prefiere un primarca random presione 2")

switch (elegir){
    case "1": 
        let numPrimarca = prompt("Ingrese Número de Primarca (1 al 20): ")
        let numLegion = primarcas.filter(num => num.numero == numPrimarca)
        console.table(numLegion)
        break;
    case "2":
        primarcaAleatorio = aleatorio(1, 20)
        console.table(primarcas[primarcaAleatorio])
        break;
    default:
        console.log("Elija una opción válida")
        break;
}

const traidorLeal = prompt("1- Lista de Primarcas Leales / 2- Lista de Primarcas Traidores") 

if (traidorLeal === "1"){
    let leales = primarcas.filter(leales => leales.condicion === "Leal")
    console.table(leales)
}else{
    let traidores = primarcas.filter(traidor => traidor.condicion === "Traidor")
    console.table(traidores)
}

function crearMarine(nombre, legion, habilidad){
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


