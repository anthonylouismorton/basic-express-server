'use strict'

const app = require('../src/server.js')
const supertest = require('supertest')
const { expect } = require('@jest/globals')
const request = supertest(app.app)

describe('Testing 404 for a bad route', () =>{
  it('Should be able to throw a 404 on a bad route', async () => {
    const response = await request.get('/badroute')
    expect(response.status).toBe(404)
  })
})

describe('Testing 404 for a bad method', () =>{
  it('Should be able to throw a 404 on a bad method', async () => {
    const response = await request.put('/person')
    expect(response.status).toBe(404)
  })
})

describe('Testing 500 for no name in the query string', () =>{
  it('Should be able to throw a 500 on an empty query string', async () => {
    const response = await request.get('/person?name=')
    expect(response.status).toBe(500)
  })
})

describe('Testing 200 for name in the query string', () =>{
  it('Should be able to throw a 200 on a string', async () => {

    const response = await request.get('/person?name=Anthony')
    expect(response.status).toBe(200)
  })
})

describe('Testing for name in the query string', () =>{
  it('Should output an object in the correct format', async () => {

    const response = await request.get('/person?name=Anthony')
    expect(response.status).toBe(200)
    expect(typeof response.body).toBe('object')
  })
})