const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/OmniStack', { useNewUrlParser: true, useUnifiedTopology: true });

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);