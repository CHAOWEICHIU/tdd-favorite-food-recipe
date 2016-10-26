'use strict';
const request = require('request')


module.exports = {
	calculate: (subtotal, state, done)=>{
		request.post({
			url: 'https://some-tax-service.com/request',
			method:'POST',
			json: {
				subtotal: subtotal
			}
		}, (err, res, body)=>{
			done(body)
		})
	}

}