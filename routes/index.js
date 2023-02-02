const express = require('express');
const router = express.Router();

// const authMiddleware = require('../middlewares/auth-middleware');

const loginRouter = require('./loginRouter');
const signupRouter = require('./signupRouter');

router.use('/login', loginRouter);
router.use('/signup', signupRouter);



module.exports = router;
