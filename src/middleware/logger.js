'use strict';
//const error = require('../error-handlers/404.js');
module.exports = function(request, response, next){
  console.log(request.method)
  next();
  // let method = request.method;
  // if(method === 'GET'){
  //   next();
  // }
  // else{
  //   next(error);
  // }
  
  
}