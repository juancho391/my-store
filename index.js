const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3000;
app.use(express.json());



app.listen(port, ()=>{
  console.log('Corriendo en el puerto ' + port );
});


routerApi(app)

app.use(logErrors);
app.use(errorHandler);
