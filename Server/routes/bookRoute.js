import express from 'express';
import { getFreeBookContent, getFreeBooks, getPaidBookContent, getPaidBooks } from '../controllers/bookController.js';
import { verifyUserIsAuthenticated } from '../middleware/bookAuth.js';

// intialize router
const router = express.Router();

// free books preview route 
router.get('/book/free', getFreeBooks);

// free book content access route
router.get('/freebook/:freebookId', getFreeBookContent);

// paid books preview route
router.get('/book/paid', getPaidBooks);

// paid books content access route(requires authentication)
router.get('/book/:bookid', verifyUserIsAuthenticated, getPaidBookContent);

// route for checking the user is authenticated for paid books content preview
router.get('/check-auth', verifyUserIsAuthenticated);


export default router;