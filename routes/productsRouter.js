const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

// Endpoints para products
// http://localhost:3000/products?size=1


//los endpoints fijos deben ir antes de los dinamicos
router.get('/filter', (req, res)=>{
  res.send('soy un filter')
})


// Endpoints para products
// http://localhost:3000/products?size=1
router.get('/', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name : faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image : faker.image.url()
    });
  }
  res.json(products)
});


router.get('/:id', (req, res) =>{
  const {id} = req.params
  res.json({
    id,
    name : "Product 1",
    price : 1000
  });
});


module.exports = router;
