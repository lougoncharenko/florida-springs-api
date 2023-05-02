//libraries for testing
require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

//models
const Spring = require('../models/spring')

chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
  })

  const SAMPLE_SPRING_ID = 'aaaaaaaaaaaa' // 12 byte string

  describe('Spring API endpoints', () => {
    beforeEach((done) => {
        const sampleSpring = new Spring({
            name: "testSpring",
            address: "testAddress",
            description: "testDescription",
            rating: 4.5,
            entrance_fee: "testFee",
            _id: SAMPLE_SPRING_ID
        })
        sampleSpring.save()
        .then(() => {
            done()
        })
    })

    // Delete sample user.
    afterEach((done) => {
        Spring.deleteMany({ name: ['testSpring', 'anotherSpring'] })
        .then(() => {
            done()
        })
    })

    it('should load all springs', (done) => {
        chai.request(app)
        .get('/springs')
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body.springs).to.be.an("array")
            done()
        })
    })

    it('should get one spring', (done) => {
        chai.request(app)
        .get(`/springs/${SAMPLE_SPRING_ID}`)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal('testSpring')
            expect(res.body.address).to.equal('testAddress')
            expect(res.body.description).to.equal('testDescription')
            done()
        })
    })

    it('should post a new spring', (done) => {
        chai.request(app)
        .post('/springs')
        .send({name: 'anotherSpring', address: 'anotherAdress', description: 'anotherDescription', rating: 3.0, entrance_fee: 'anotherFee'})
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.spring).to.be.an('object')
            expect(res.body.spring).to.have.property('name', 'anotherSpring')

            // check that user is actually inserted into database
            Spring.findOne({name: 'anotherSpring'}).then(spring => {
                expect(spring).to.be.an('object')
                done()
            })
        })
    })

    it('should update a user', (done) => {
        chai.request(app)
        .put(`/springs/${SAMPLE_SPRING_ID}`)
        .send({name: 'anotherSpring'})
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.spring).to.be.an('object')
            expect(res.body.spring).to.have.property('name', 'anotherSpring')

            // check that user is actually inserted into database
            Spring.findOne({name: 'anotherSpring'}).then(spring => {
                expect(spring).to.be.an('object')
                done()
            })
        })
    })

    it('should delete a spring', (done) => {
        chai.request(app)
        .delete(`/springs/${SAMPLE_SPRING_ID}`)
        .end((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('Successfully deleted.')
            expect(res.body._id).to.equal(SAMPLE_SPRING_ID)

            // check that user is actually deleted from database
            Spring.findOne({name: 'testSpring'}).then(spring => {
                expect(spring).to.equal(null)
                done()
            })
        })
    })
})
