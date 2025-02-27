const productRouter = require('./productsRouter')
const userRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')

function routerApi(app){
  app.use('/api/products', productRouter);
  app.use('/api/users', userRouter);
  app.use('/api/categories', categoriesRouter);

}

module.exports = routerApi;
