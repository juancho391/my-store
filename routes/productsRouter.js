const express = require('express');
const ProductService = require("../services/productService")
const validatorHandler = require('../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema')

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



router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) =>{
  try {
    const {id} = req.params;
    const product = await service.findOne(parseInt(id));
    res.json(product);

  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
   async (req, res, next)=>{
  try {
    const {id} = req.params
    const body = req.body
    const product =  await service.update(parseInt(id), body);
    res.json(product);
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req,res, next)=>{
  try {
    const {id} = req.params;
    const response = await service.delete(parseInt(id));
    res.json(response)
  } catch (error) {
    next(error)
  }

})

module.exports = router;
