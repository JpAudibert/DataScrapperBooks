import express from 'express';
import routes from './routes';

// require('../database');

// logica da url -> https://loja.panini.com.br/panini/solucoes/Busca.aspx?i=40|1624,44|2085
// capturar os titulos -> https://loja.panini.com.br/panini/produto/Manga-<Nome do manga>-edicao-<Numero da edicao>.aspx

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
