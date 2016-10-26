'use strict';

var dataFactory = [];
var request = require('request');
var co = require('co');


function dataPromise(url){
	return new Promise((resolve, reject)=>{
		request(url, (err, res, items)=>{
			if(!err && res.statusCode == 200){
				resolve(JSON.parse(items))
			} else {
				reject(res.statusCode)
			}
		})
	})
}


function Person(name){
	this.name = name
}
Person.prototype.getAll = function (item, users){
	if(item === 'foods' || item === 'users'){
		return dataPromise(`http://localhost:3000/api/${item}`)	
	} else {
		let userIndex = users.map((user)=>user.name).indexOf(this.name)
		let user = users[userIndex]
		let url = `http://localhost:3000/api/users/${user._id}/${item}`
		return dataPromise(url)
	}
}
var greeting = 'hi'

module.exports.PersonClass = Person
exports.speak  = greeting




