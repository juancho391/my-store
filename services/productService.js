const {faker} = require('@faker-js/faker');
const findTheIndex  = require('../utilities/findIndex');


class ProductService{

  constructor(){
    this.products = [];
    this.generate();
  }
  async generate(){
    const limit = 100;
    for(let index = 0; index < limit; index++){
      this.products.push({
        id : index,
        name : faker.commerce.productName(),
        price : parseInt(faker.commerce.price(),10),
        image : faker.image.url(),
      });
    }

  }
  async create(data){
    const newProduct = {
      ...data
    }
    this.products.push(newProduct);
    return newProduct
  }
  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.products);
      }, 5000);
    })
  }

  async findOne(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = this.products.find(item => item.id === id)

        if(!product){
          reject(new Error("product not found"))
        }else{
          resolve(product)
        }
      }, 3000);

  });
  }

  async update(id, changes){
    const index = findTheIndex(id, this.products);
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];

  }
  async delete(id){
    const index = findTheIndex(id, this.products);
    this.products.splice(index,1)
    return {id}

  }
}

module.exports = ProductService
