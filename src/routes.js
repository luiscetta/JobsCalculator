// biblioteca para criar servidor
const express = require('express');
const routes = express.Router();

const  views = __dirname + "/views/"

// criando perfil estático
const profile = {
    name: "Luis Cetta",
    avatar: "https://github.com/luiscetta.png",
    'monthly-budget': 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
}

// controle de jobs - salvar jobs
const jobs = [];

// req, res 
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))

// criar/salvar dados job  
routes.post('/job', (req, res) => {
    // jogando os dados para o array jobs
    const job = req.body;

    // atribuindo uma nova data
    job.createdAt = new Date.now();

    jobs.push()

    // assim que salvar os dados, redirecionar para home page
    return res.redirect('/')
})

routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


// export routes
module.exports = routes; 