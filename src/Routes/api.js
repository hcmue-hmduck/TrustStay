const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.get('/user', UserController.getAllUser);

module.exports = router;