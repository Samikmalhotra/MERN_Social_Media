const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// @route   GET api/auth
// @desc    TEST route
// @access     Public
router.get('/',(req,res)=>res.send('Auth route'));

module.exports = router;