const express = require('express');
const router = express.Router();

// const authMiddleware = require('../middlewares/auth-middleware');

const loginRouter = require('./loginRouter');
const signupRouter = require('./signupRouter');
const userUpdateRouter = require('./userUpdateRouter');


router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/user', userUpdateRouter);


module.exports = router;
