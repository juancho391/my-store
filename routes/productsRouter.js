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
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products)

});



router.get('/:id', async (req, res) =>{
  try {
    const {id} = req.params;
    const product = await service.findOne(parseInt(id));
    res.json(product);

  } catch (error) {
    res.status(404).json({
    message : error.message
    })
  }
});

router.post('/', async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id', async (req, res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const product =  await service.update(parseInt(id), body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message : error.message
    })
  }
})

router.delete('/:id', async (req,res)=>{
  try {
    const {id} = req.params;
    const response = await service.delete(parseInt(id));
    res.json(response)
  } catch (error) {
    res.status(404).json({
      message : error.message
    })
  }

})

module.exports = router;
