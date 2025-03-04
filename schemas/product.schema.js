const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string().max(10);
const price = Joi.number().integer().min(10).strict();


const createProductSchema = Joi.object({
  name: name.required(),
  price : price.required(),
});

const updateProductSchema = Joi.object({
  name : name,
  price: price
});

const getProductSchema = Joi.object({
  id: id.required(),
});



module.exports = { createProductSchema, updateProductSchema , getProductSchema}
