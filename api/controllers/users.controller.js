'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.usersGetAll = (req, res)=>{
	User.find().exec((err, users)=>{
		res.send(users)
	})
}