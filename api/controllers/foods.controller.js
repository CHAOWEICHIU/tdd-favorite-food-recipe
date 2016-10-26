'use strict'

const mongoose 	= require('mongoose'),
	  Food 	  	= mongoose.model('Food')

module.exports.foodsGetAll = (req, res)=>{
	Food.find().exec((err, data)=>{
		if(err) return err
		res.status(200).json(data)
	})
}