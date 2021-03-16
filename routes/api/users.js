const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator/check');
const { rawListeners } = require('../../models/User');

const User = require('../../models/User')

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email',"Please include a valid email address").isEmail(),
        check('password',"Please enter a password of atleast 6 characters").isLength({min: 6})
    ],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name,email,password} = req.body;

    try{
        let user = User.findOne({email});

        // See if user exists
        if(user){
            res.status(400).json({errors: [{msg:"User already exists"}]});
        }

        // Get users gravatar

        // Encrypt password

        // Return jsonwebtoken

        res.send('User route')
    }catch(e){
        console.error(e.message);
        res.status(500).send('Server Error!')
    }
});


module.exports = router;