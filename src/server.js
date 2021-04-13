const express = require("express")
const server = express()
const routes = require("./routes")

// Import EJS - template engine
server.set('view engine', 'ejs')

// Rota Estática (antes de entrar no GET - Habilitar arquivos statics)
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando, meu parceiro')) 