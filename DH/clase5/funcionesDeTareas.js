const fs = require('fs');

const tareas = fs.readFileSync('./tareas.json', "utf-8");

const objetoTareas = JSON.parse(tareas);
  
function listarTareas(archivoTareas, accion) {
  switch (accion) {
    case "listar":
      console.log(objetoTareas);      
      break;
    case undefined:
      console.log("Atención - Tienes que pasar una acción.");
      break;
    default:
      console.log("No entiendo qué quieres hacer.");
      break;
  }
};


let tareasListada = objetoTareas.forEach (function(valor, indice){
  console.log( (indice +1+ "." + valor.titulo + " " + valor.estado))
})
console.log(listarTareas)
//console.log(tareas)

module.exports = listarTareas;
