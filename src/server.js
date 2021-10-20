'use strict';

const express = require('express');
const app = express();
const validator = require('./middleware/validator.js')
const logger = require('./middleware/logger.js')
const error404 = require('./error-handlers/404')
const error500 = require('./error-handlers/500')
app.use(express.json());

app.use(logger);
app.get('/person', validator, handlePerson);


function handlePerson(request, response){
  let name = request.query;
  response.send(name);
}

app.use(error500);
app.use('*',error404);


module.exports = {
  app,
  start: port => {app.listen(port, () => console.log('server running', port))}
};