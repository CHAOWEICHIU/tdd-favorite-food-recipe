'use strict';


const chai  	= require('chai'),
	  nock 		= require('nock'),
	  tax 		= require('../api/tax'),
	  expect 	= chai.expect;


describe('tax', ()=>{
	it('.calculate() should resolve with an object conatining tax detail', (done)=>{
		nock('https://some-tax-service.com')
	      .post('/request')
	      .reply(200, {
	        amount: 7
	      });

	    tax.calculate(500, 'CA', function(taxDetails) {
	      expect(taxDetails).to.eql({ amount: 7 });
	      done();
	    });
	})

	it('.calculate() should send the subtotal in the request', (done)=>{
		nock('https://some-tax-service.com')
			.post('/request')
			.reply(200, (url, requestBody)=>{
				return { amount: requestBody.subtotal * 0.10 }
			})
		tax.calculate(100, 'CA', (taxDetails)=>{
			expect(taxDetails).to.eql({ amount:10 })
			done()
		})
	})

	



})
