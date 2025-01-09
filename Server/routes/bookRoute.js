import express from 'express';
import { getBookInfo } from '../controllers/bookController.js';

// intialize router
const router = express.Router();

// new books route 
router.get('/book', getBookInfo);

export default router;