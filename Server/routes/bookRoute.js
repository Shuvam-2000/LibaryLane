import express from 'express';
import { getFreeBooks, getPaidBooks } from '../controllers/bookController.js';
import { verifyUserIsAuthenticated } from '../middleware/bookAuth.js';

// intialize router
const router = express.Router();

// free books route 
router.get('/book/free', getFreeBooks);

// paid books route
router.get('/book/paid', verifyUserIsAuthenticated, getPaidBooks )

export default router;