import express from 'express';
import { userLogin, userLogout, userSignUp } from '../controllers/userController.js';

// intialize router
const router = express.Router();

// new user signup route
router.post('/signup', userSignUp);

// existing user login route
router.post('/login', userLogin);

// existing user logout route
router.get('/logout', userLogout);

export default router;