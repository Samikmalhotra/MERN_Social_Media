const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/',async(req,res)=>{
    try{

    }catch(e){
        console.error(e.message)
        res.status(500).send('Server Error!')
    }
});

module.exports = router;