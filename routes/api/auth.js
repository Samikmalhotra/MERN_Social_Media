const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');


// @route   GET api/auth
// @desc    TEST route
// @access     Public
router.get('/',auth, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(e){
        console.error(e.message);
        res.status(500).send('Server Error!')
    }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email',"Please include a valid email address").isEmail(),
        check('password',"Please enter a password of atleast 6 characters").isLength({min: 6})
    ],
    async(req,res)=>{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {name,email,password} = req.body;

        try{
            let user = await User.findOne({email});

            // See if user exists
            if(user){
               return res.status(400).json({errors: [{msg:"User already exists"}]});
            }

            // Get users avatar
            const avatar = gravatar.url(email,{
                s:'200',
                r:'pg',
                d:'mm'
            })

            user = new User({
                name,
                email,
                avatar,
                password
            });

            // Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt)
            await user.save();

            // Return jsonwebtoken
            const payload = {
                user:{
                    id: user.id,
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),{expiresIn: 360000}, (err,token)=>{
                if(err){
                    throw err;
                }
                res.json({token});
            });

        }catch(e){
            console.error(e.message);
            res.status(500).send('Server Error!')
        }
    });


module.exports = router;