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

function tablaLeal(){
    for (i = 0; i < primarcas.length; i += 1){
        let primarca = Object.values(primarcas[i])
        if (primarca[3] === "Leal" ){
            let nombre = document.getElementById("tablaLealTraidor")
            nombre.innerHTML += `
            <tr>
                <td style="border: solid black;">${primarca[0]}</td>
                <td style="border: solid black;">${primarca[3]}</td>
            </tr>`
        }
    }
    console.log("boton clickeado")
}

function disableButtonL(){
    let disButton = document.getElementById("btnLeal")
    disButton.disabled = true
}

const botonLeal = document.getElementById("btnLeal")
botonLeal.addEventListener("click", tablaLeal)
botonLeal.addEventListener("click", disableButtonL)


function tablaTraidor(){
    for (i = 0; i < primarcas.length; i += 1){
        let primarca = Object.values(primarcas[i])
        if (primarca[3] === "Traidor" ){
            let nombre = document.getElementById("tablaLealTraidor")
            nombre.innerHTML += `
            <tr>
                <td style="border: solid black;">${primarca[0]}</td>
                <td style="border: solid black;">${primarca[3]}</td>
            </tr>`
        }
    }
}

function disableButtonT(){
    let disButton = document.getElementById("btnTraidor")
    disButton.disabled = true
}

const botonTraidor = document.getElementById("btnTraidor")
botonTraidor.addEventListener("click", tablaTraidor)
botonTraidor.addEventListener("click", disableButtonT)