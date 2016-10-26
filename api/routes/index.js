const express 		= require('express'),
	  router 		= express.Router()

const foodsController = require('../controllers/foods.controller')
const usersController = require('../controllers/users.controller')
const likesController = require('../controllers/likes.controller')


// router.route('/foods')
// 	.get(foodsController.foodsGetAll)

router
	.route('/users/:userId/likes')
	.get(likesController.likesGetAll)
	// .put(likesController.likeUpdateOne)
	// .post(likesController.likesAddOne)

router.route('/users')
	.get(usersController.usersGetAll)	


module.exports = router

