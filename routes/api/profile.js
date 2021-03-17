const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require ('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/',async(req,res)=>{
    try{
        const profile = await Profile.findOne({user: req.user.id});
    }catch(e){
        console.error(e.message)
        res.status(500).send('Server Error!')
    }
});

module.exports = router;