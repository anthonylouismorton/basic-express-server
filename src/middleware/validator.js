'use strict'

module.exports = function (request, response, next) {
  let {name} = request.query;
  console.log(name)
  if(name){
    next();
    
  }
  else{
    response.status(500)
    next('you did not enter a name');
  }
  
}