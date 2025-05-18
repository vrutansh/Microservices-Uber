const express = require('express');
const router = express.Router();
const userRoutes = require('../routes/user.routes')
const userController = require('../controllers/user.controller')

router.post('/register', userController.register ) 

module.exports = router;