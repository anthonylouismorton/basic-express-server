'use strict'

module.exports = function (request, response, next) {
  let {name} = request.query;
  console.log(name)
  if(name){
    console.log('in the if')
    next();
    
  }
  else{
    next('you did not enter a name');
  }
  
}