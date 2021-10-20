'use strict'

module.exports = function (err, request, response, next) {
  console.log(err)
  response.status(404)
  response.end();
  
}