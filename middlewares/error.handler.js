function logErrors(err, req, res, next){
  console.log("log errors");
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next){
  console.log("handler errors");
  res.status(500).json({
    message : err.message,
    stack : err.stack,
  });
}


function boomErrorHandler(err, req, res, next){
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }else{
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler}
