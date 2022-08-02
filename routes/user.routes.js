const express = require('express');

const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('', userController.getUsers);

userRouter.get(':userId', userController.getUserById);

userRouter.post('', userController.postUser);

module.exports = userRouter;