import express from 'express';
import { getBookInfo } from '../controllers/bookController.js';

const router = express.Router();

router.get('/book', getBookInfo);

export default router;