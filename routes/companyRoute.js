const express = require('express');
const passport = require('passport');
const companyController = require('../controllers/companyController');
const router = express.Router();

// -------- Get requests ----------
router.get('/home', passport.checkAuthentication, companyController.companyPage);

router.get('/allocate', passport.checkAuthentication, companyController.allocateInterview);

// -------- Post Requests ---------

router.post('/schedule-interview', passport.checkAuthentication, companyController.scheduleInterview);
router.post('/update-status/:id', passport.checkAuthentication, companyController.updateStatus);

module.exports = router;
