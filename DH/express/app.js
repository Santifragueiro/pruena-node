const express = require ('express')

const path = require('path')

const app = express()

app.listen(3000,()=> console.log("servidor corriendo")) //con esto levantamos el servidor en el puerto 3000 y el consolelog 
//es para que nos devuelva y ver que esta corriendo el puerto

app.get('/', function (req, res){ //request - response 
    res.send("bienvenidos")
})

app.get('/contacto', function (req, res){
    res.send("Dejanos tu contacto")
})

app.get('/un-array', function (req, res){
    res.send([1, 2, 3, "Hola"])
})

app.get('/objeto', function (req, res){
    //console.log(__dirname) // para saber la ruta a la que hay que mandar el archivo
    //res.sendFile('https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg')

    let htmlPath = path.resolve(__dirname, './express/index.html') //resolve o join
    res.sendFile(htmlPath)
})

