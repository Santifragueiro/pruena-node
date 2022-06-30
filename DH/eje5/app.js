
const salida = process.argv[2]

const listarTareas = require ('./funcionesDeTareas')

listarTareas("./tareas.json", salida);


