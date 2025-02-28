const express = require('express');
const ProductService = require("../services/productService")

const router = express.Router();
const service = new ProductService();
// Endpoints para products
// http://localhost:3000/products?size=1


//los endpoints fijos deben ir antes de los dinamicos
router.get('/filter', (req, res)=>{
  res.send('soy un filter')
})


// Endpoints para products
// http://localhost:3000/products?size=1
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products)

});



router.get('/:id', (req, res) =>{
  const {id} = req.params;
  const product = service.findOne(parseInt(id));
  res.json(product);
});

router.post('/', (req, res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res)=>{
  const {id} = req.params
  const body = req.body
  const product = service.update(parseInt(id), body);
  res.json(product);
})

router.delete('/:id', (req,res)=>{
  const {id} = req.params;
  const response = service.delete(parseInt(id));
  res.json(response)

})

module.exports = router;
