'use strict'

const validator = require('../src/middleware/validator.js');


describe('Testing validator for no name in the query string', () =>{
  let req ={method: 'GET', query: {}};
  let res = {status: jest.fn()};
  let next = jest.fn();

  it('Should be able to throw a 500 on an empty query string', async () => {
    req.query.name = undefined;
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('you did not enter a name');

  })
})