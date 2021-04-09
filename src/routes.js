// biblioteca para criar servidor
const express = require('express');
const routes = express.Router();

const  views = __dirname + "/views/"

// criando perfil estático
const profile = {
    name: "Luis Cetta",
    avatar: "https://avatars.githubusercontent.com/u/74614495?v=4",
    'monthly-budget': 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
}

// req, res 
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


// export routes
module.exports = routes; 