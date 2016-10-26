'use strict'
const chai = require('chai'),
	  assert = chai.assert,
	  expect = chai.expect,
	  sinon  = require('sinon'),
	  Cart   = require('../api/cart'),
	  tax	 = require('../api/tax');


describe('Cart', ()=>{
	let items = [
		{id: 1, name: 'apple', price:20, qty: 2},
		{id: 1, name: 'orange', price:30, qty: 2}
	]

	beforeEach(()=>{
		sinon.stub(tax, 'calculate', (subtotal, state, done)=>{
			setTimeout(()=>done({amount:30}), 1000)
		})
	})

	afterEach(()=>{
		tax.calculate.restore()
	})

	it('.getSubtotal() should return 0 if no items are passed in', ()=>{
		let newCart = new Cart([]);
		expect(newCart.getSubtotal()).to.equal(0)
	})
	it('.getSubtotal() should return correct amount of price',()=>{
		let newCart = new Cart(items)
		expect(newCart.getSubtotal()).to.equal(100)
	})
	it('.getTax() should execute the callback function with the tax amount', (done)=>{
		let newCart = new Cart(items)
		newCart.getTax('NYB', (amount)=>{
			expect(amount).to.equal(30)
			done()
			
		})
	})
})







