const express = require('express');
const request = require('supertest')
const expect = require('chai').expect
const app = express();


app.get('/first', (err, res) => {
    res.status(200).json({ 'ok': 'response' })
})

describe('first test', () => {
    it('Ok response', () => {
        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200)
            })
    })
    it('Mocky OK response', (done) => {
        request('https://run.mocky.io')
            .get('/v3/e7c86760-cf69-41dd-b6dc-eb1e19524fab')
            .expect(200, done)
    })
})