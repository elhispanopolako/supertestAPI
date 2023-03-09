const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('Post requests', () => {
    it.skip('Post json response', () => {
        request(app)
            .post('/course')
            .send({ "name": "supertest" })
            .set('Accept', 'application/json')
            .end((err, res) => {
                console.log(res.body)
                expect(res.body.name).to.be.equal('supertest');
            });
    })
    it('Post form response', () => {
        request(app)
            .post('/course')
            .send('name=supertest')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200, { "id": "2", "name": "supertest" })
    })
})