'use strict';
const tax = require('./tax')

module.exports= function Cart(arrayItems){
	let subtotal = arrayItems.reduce((sum, item)=>{
		return sum + (item.price * item.qty)
	}, 0)


	
	this.getSubtotal =()=>{
		return subtotal
	}

	this.getTax=(state, done)=>{
		tax.calculate(subtotal, state, (taxInfo)=>{
			done(taxInfo.amount)
		})
	}
}