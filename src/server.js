const express = require("express")
const server = express()

// Rota (antes de entrar no GET - Habilitar arquivos statics)
server.use(express.static("public"))

// request, response 
server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})


server.listen(3000, () => console.log('rodando')) 