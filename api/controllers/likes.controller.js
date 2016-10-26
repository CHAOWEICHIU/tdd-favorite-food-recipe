'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.likesGetAll = (req, res) => {
	var userId = req.params.userId;
	User
		.findById(userId)
		.select('likes')
		.exec((err, obj)=>{
			res.send(obj.likes)
		})
}