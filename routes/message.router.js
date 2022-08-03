const express = require('express');

const messageController = require('../controllers/message.controller');

const messageRouter = express.Router();

messageRouter.get('/', messageController.getMessageInitPage);

module.exports = messageRouter;