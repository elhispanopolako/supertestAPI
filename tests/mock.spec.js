const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mock response', () => {
    beforeEach(() => {
        nock('https://localhost:4000')
            .get('/users')
            .twice()
            .reply(200, { "users": [{ "id": "1" }] })
    })
    it('nock intercepts', () => {
        request('https://localhost:4000')
            .get('/users')
            .end((err, res) => {
                expect(res.body.users[0].id).to.be.equal("1")
            })
    })
})