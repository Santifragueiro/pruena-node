const express = require('express')

const app = express()

const path = require('path')

const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath))

app.listen (3030, () => console.log("servidor corriendo"))

app.get ('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
}
)

app.get ('/register', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
}
)

app.get ('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
}
)

