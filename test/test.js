'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = require('chai').should()
const expect = require('chai').expect
const server = require('../app')

// Assertion
chai.should()
chai.use(chaiHttp)

const { params1, result1, addChuck, addChuckResult, replacers, replacerResult, splitTest, splitResult, alignTest, alignResult, getResult } = require('../mockData/apiTestData')
const FormatClass = require('../models/formatterModel')

describe('API', () => {
  /**
     * Test router
     */
  describe('POST /format', () => {
    it('It should return manipulated string (integration test)', (done) => {
      chai.request(server)
        .post('/api/v1/format ')
        .send(params1)
        .end((error, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          expect(response.text).to.equal(result1.str)
          done()
        })
    })
  })

  /**
     * Test addChucks function
     */
  describe('unit', () => {
    it('It should concat str and Chuck API results', async () => {
      const formatter = new FormatClass(addChuck)
      await formatter.addChucks()
      expect(addChuckResult.str).to.eql(formatter.params.str)
    })
  })

  /**
     * Test replacer function
     */
  describe('unit', () => {
    it('It should replace character depends on the case ', async () => {
      const formatter = new FormatClass(replacers)
      await formatter.replacer('replaces')
      await formatter.replacer('italics')
      await formatter.replacer('bolds')
      await formatter.replacer()
      expect(replacerResult.str).to.eql(formatter.params.str)
    })
  })

  /**
     * Test split function
     */
  describe('unit', () => {
    it('It should split the string by newline character and line width then push lines to array ', async () => {
      const formatter = new FormatClass(splitTest)
      await formatter.splitString()
      expect(formatter.result).to.eql(splitResult.result)
    })
  })

  /**
     * Test alignText function
     */
  describe('unit', () => {
    it('It should add spaces depends on the alignment case ', async () => {
      const formatter = new FormatClass(alignTest)
      formatter.result = alignTest.strArr
      await formatter.alignText()
      expect(formatter.result).to.eql(alignResult.result)
    })
  })

  /**
     * Test getResult function
     */
  describe('unit', () => {
    it('It should turn result array into result string ', async () => {
      const formatter = new FormatClass(alignTest)
      formatter.result = alignTest.strArr
      const response = await formatter.getResult()
      expect(response).to.eql(getResult.resultStr)
    })
  })
})
