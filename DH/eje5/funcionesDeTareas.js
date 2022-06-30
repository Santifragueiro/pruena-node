const fs = require ('fs')

const tareas = fs.readFileSync('./tareas.json');

const tareasjson = JSON.parse(tareas)

//const ejercicioApp = require('./tareas.json')


function listarTareas (tareasDeJson, salida){ 

    switch(salida){
        case "listar":
            tareasjson.forEach (function(valor, indice){
                console.log( (indice +1) + ". " + valor.titulo + " - " + valor.estado)
            });          break;
     case undefined:
           console.log("Atención - Tienes que pasar una acción");
          break;
          default: 
           console.log("No entiendo qué quieres hacer.");
          break;
    }

}


//let tareasForEach = tareasjson.forEach (function(valor, indice){
//    console.log( (indice +1) + ". " + valor.titulo + " - " + valor.estado)
//})

function escribirJSON(arrayDeTareas) {
    const tareasString = JSON.stringify(arrayDeTareas)
}


module.exports = listarTareas

