const express = require('express');
const router = express.Router();

const homeRouter = require('../Routes/home.js');
const adminRouter = require('../Routes/admin.js');

router.use('/', homeRouter);
router.use('/admin', adminRouter);

module.exports = router;