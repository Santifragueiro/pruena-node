const fs = require ('fs')

const tareas = fs.readFileSync('./tareas.json');

const tareasjson = JSON.parse(tareas)

const ejercicioApp = require('./tareas.json')

console.log(tareasjson)