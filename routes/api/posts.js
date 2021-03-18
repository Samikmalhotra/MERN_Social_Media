const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator')

// @route   POST api/posts
// @desc    Create a post
// @access  Private 
router.post('/', [auth, [

]],
async(req,res)=>{

});

module.exports = router;