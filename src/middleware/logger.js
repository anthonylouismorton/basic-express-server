'use strict';

module.exports = function(request, response, next){
  console.log(request.method)
  next();
  // let method = request.method;
  // if(method === 'POST' || method === 'GET'){
  //   next();
  // }
  // else{
  //   next('something went wrong');
  // }
  
  
}