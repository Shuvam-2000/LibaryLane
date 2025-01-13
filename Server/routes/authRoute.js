import express from 'express';
import { verifyUserIsAuthenticated } from '../middleware/bookAuth.js';

// intialize the router 
const router = express.Router();

// Route for checking if the user is authenticated
router.get('/check-auth', verifyUserIsAuthenticated, (req, res) => {
    res.status(200).json({ message: 'User is authenticated' });
});
  
export default router;