const express = require('express')
const app = express();
const port = 3000;

app.get('/', (request, res)=>{
  res.send("Hola mi server en express")
})

app.get('/neuva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta')
})

app.get('/products', (req, res) => {
  res.json({
    name : "Product 1",
    price : 1000
  });
})

app.get('/users/:userId/', (req, res) =>{
  res.send(req.params)
});

app.listen(port, ()=>{
  console.log('Corriendo en el puerto ' + port );
});
