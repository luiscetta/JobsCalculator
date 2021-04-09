// biblioteca para criar servidor
const express = require('express');
const routes = express.Router();


// req, res 
routes.get('/', (req, res) => res.render("index"))
routes.get('/job', (req, res) => res.render("job"))
routes.get('/job/edit', (req, res) => res.render("job-edit"))
routes.get('/profile', (req, res) => res.render("profile"))


// export routes
module.exports = routes; 