// 'use strict'

// const logger = require('../src/middleware/logger.js');


// describe('Testing logger to determine if it is logging requests', () =>{
//   let req ={method: 'GET', query: {}};
//   let res = {status: null};
//   let next = jest.fn();
//   it('Should be able to log any methods', async () => {
//     req.query.name = undefined;
//     logger(req, res, next);
//     expect(console.log).toHaveBeenCalledWith('GET');
//     expect(next).toHaveBeenCalled();
//   })
// })