const express = require('express');
const route = express.Router()

const userController = require('../controller/user')

//GET method
route.get('/users', userController.index)

route.get('/users/:id', userController.show)
  
  //POST method
  route.post('/users', userController.store)
  
  //PUT method
  route.put('/users/:id', userController.update)
  
  //DELETE method
  route.delete('/users/:id', userController.delete)    
module.exports = route