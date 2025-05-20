const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', userController.register ) 
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/profile', authMiddleware.userAuth, userController.profile);

module.exports = router;