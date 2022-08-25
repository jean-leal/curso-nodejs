const express = require('express');
const app = express();

//IMPORTAR O ROTEAMENTO
const carros = require('./routes/carros');

//config
const PORT = process.env.PORT || 3000;

app.use('/carros', carros);

app.get('/', (req, res)=>{
  res.send('<h1>Hello World!!!</h1>')
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

