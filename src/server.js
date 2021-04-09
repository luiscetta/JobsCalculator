const express = require("express")
const server = express()
const routes = require("./routes")

// Rota Estática (antes de entrar no GET - Habilitar arquivos statics)
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando')) 