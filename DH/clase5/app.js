const listarTareas = require("./funcionesDeTareas");

const accion = process.argv[2];

listarTareas("./tareas.json", accion);
