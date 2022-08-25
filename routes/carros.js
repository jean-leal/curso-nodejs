const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Rota Carros');
});

router.get('/:marca', (req, res)=>{
  const marcas = [ 'fiat', 'volks', 'bmw'];
  if(marcas.includes(req.params.marca)){
    res.send('A marca é '+ req.params.marca)
  } else{
    res.status(404).send('Marca não encontrada!')
  }
  
});

router.get('/fiat/uno', (req, res)=>{
  res.send('Rota Uno');
});

module.exports = router;