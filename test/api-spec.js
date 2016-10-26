'use strict'

const expect 		= require('chai').expect,
	  request 		= require('request'),
	  sinon 		= require('sinon'),
	  Food 			= require('../api/models/foods.model');



describe('Get all foods', ()=>{
	it('Should return all foods', (done)=>{
		let FoodMock = sinon.mock(Food)
		let expectedResult = {status: true, foods:[]}
		FoodMock.expects('find').yields(null, expectedResult)
		Food.find(function(err, result){
			FoodMock.verify();
            FoodMock.restore();
            expect(result.status).to.equal(true)
            done()
		})
	})
	
	it('should return error', (done)=>{
		let FoodMock = sinon.mock(Food)
		let expectedResult = { status: false, error: 'Something wrong'}
		FoodMock.expects('find').yields(expectedResult, null)
		Food.find(function(err, result){
			FoodMock.verify();
            FoodMock.restore();
            expect(err.status).to.equal(false)
            done()
		})
	})	
})

describe('post a food', ()=>{
	it('should return status true after', (done)=>{
		let FoodMock = sinon.mock(new Food({name: 'good', description: 'yummy'}))
		let food = FoodMock.object
		let expectedResult = {status: true, food: food}
		FoodMock.expects('save').yields(null, expectedResult)
		food.save(function(err, result){
			FoodMock.verify()
			FoodMock.restore()
			expect(result.status).to.equal(true)
			expect(result.food).to.equal(food)
			done()
		})
		
	})
})


// it('POST - /api/foods')
// it('PUT - /api/foods/:id')
// it('DELETE - /api/foods/:id')