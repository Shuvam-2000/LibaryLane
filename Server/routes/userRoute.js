import express from 'express';
import { userSignUp } from '../controllers/userController.js';

// intialize router
const router = express.Router();

// new user signup route
router.post('/signup', userSignUp);

export default router;