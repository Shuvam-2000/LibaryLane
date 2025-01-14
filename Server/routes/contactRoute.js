import express from 'express';
import { getContactInfo } from "../controllers/contactController.js";

// intialize the router
const router = express.Router()

// route for contactinfo from any user
router.post('/contactinfo', getContactInfo); 

export default router;