// biblioteca para criar servidor
const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

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
const jobs = [
    {
        id: 1,
        name: "Take Burguer Hamburgueria",
        'daily-hours': 2,
        'total-hours': 60,
        createdAt: Date.now(),
    },
    {
        id: 2,
        name: "Caldinhos da Nanda",
        'daily-hours': 5,
        'total-hours': 37,
        createdAt: Date.now(),
    },
];

// req, res 
routes.get('/', (req, res) => {

    // Ajustes no Jobs - Calculo de tempo restante
    const updatedJobs = jobs.map((job) => {
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed() // => toFixed: se o numero for quebrado, ele deixa inteiro.

        // Dia de criação do job
        const createdDate = new Date(job.createdAt)

        // Dia do vencimento do job
        const dueDay = createdDate.getDate() + Number(remainingDays)

        // Data exata do vencimento.
        // const dueDate = createdDate.setDate


        return job

    })

    return res.render(views + "index", { jobs })
})
routes.get('/job', (req, res) => res.render(views + "job"))

// criar/salvar dados job  
routes.post('/job', (req, res) => {
    // atribuindo uma nova data (dias restantes)
    // job.createdAt = new Date.now();

    // criando ID para os jobs. Conforme vai adicionando jobs, o Id vai mudando automáticamente conforme a posição no array.
    const lastId = jobs[jobs.length - 1]?.id || 1;

    // jogando os dados para o array jobs
    jobs.push({
        id: lastId + 1, // => pega o ultimo id e soma +1 a ele.
        name: req.body.name,
        'daily-hours': req.body["daily-hours"],
        'total-hours': req.body["total-hours"],
        createdAt: Date.now() // => Atribuindo data de hoje.

    })

    // assim que salvar os dados, redirecionar para home page
    return res.redirect('/')
})

routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


// export routes
module.exports = routes;