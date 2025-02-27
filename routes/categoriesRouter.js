const express = require('express');

const router = express.Router();

// Endpoints para categorias
router.get('/', (req,res)=>{
  res.json([{
    categoryId : 1,
    categoryName: "Tecnologia"
  },
  {
    categoryId: 2,
    categoryName: "Belleza"

}])
})

router.get('/:categoryId/', (req, res)=>{
  const {categoryId} = req.params;
  res.json({
    categoryId,
    categoryName: "Tecnologia"
  })
})

//Endpoint para categoria y product con sus respectivos id
router.get('/:categoryId/products/:productId', (req, res)=>{
  const {categoryId , productId} = req.params;
  res.json({
    categoryId,
    productId
  })
})


module.exports = router;
