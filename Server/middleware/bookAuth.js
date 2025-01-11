import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

// Load Envrionment Variables
configDotenv()

// middleware to grant access to logged in user for paid books
export const verifyUserIsAuthenticated = async (req,res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json({ message: "Access Denied for paid books" })

        // verifying token from the cookies
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = tokenVerified // attach the user information to the req object
        next() // Proceed to the next middlewares 
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(401).json({ message: "Invalid or expired token" });
    }
} 