const express = require('express');
const router = express.Router();

const AdminController = require('../Controllers/AdminController');

router.use((req, res, next) => {
    res.locals.layout = 'layouts/adminLayout';
    next();
});


router.get('/dashboard', AdminController.getDashboard);
router.get('/tours', AdminController.getTours)


module.exports = router;