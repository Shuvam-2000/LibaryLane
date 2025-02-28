import UserModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

// Load Evironment variables
configDotenv();

// new user signup
export const userSignUp = async (req,res) => {
    try {
        const { username, email, password } = req.body;

        // Authenticate if the user already exists with email
        const user = await UserModel.findOne({ email }) 
        if(user) return res.status(409).json({ message: 'User Already Exists', success: false })

        // register new user with required fields and securely hash the password
        const registerNewUser = new UserModel({ username, email, password });
        registerNewUser.password = await bcrypt.hash(password, 10);  // hash the password with bycrpt
        await registerNewUser.save();    // save the password in the db

        // Initialize jwt token for the user
        const jwtToken = jwt.sign({ 
            email: registerNewUser.email, 
            id: registerNewUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d'})

        // Set the token to HTTP-only cookie
        res.cookie('token', jwtToken, {
            httpOnly : true,
            maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 1 day
        })

        res.status(201).json({ message: "Signed Up Successfully", success: true, })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
}

// existing user login
export const userLogin = async (req,res) => {
    try {

        // validating email for exisitng user login
        const { email, password } = req.body;
        const existingUserLogin = await UserModel.findOne({ email });
        const errorMessage = 'Incorrct Email Or Password';
        if(!existingUserLogin) return res.status(403).json({ message: errorMessage, success: false });

        // validating the password by authenticating the client side passowrd with the passoword in the db
        const isPasswordMatched = await bcrypt.compare(password, existingUserLogin.password);
        if(!isPasswordMatched) return res.status(403).json({ message: errorMessage, success: false});

        // Initialize jwt token for the user
        const jwtToken = jwt.sign({ 
            email: existingUserLogin.email,
            id: existingUserLogin._id}, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d'})

        // Set the token to the HTTP-only cookie
        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // use secure cookies in production
            maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 1 day
        })

        res.status(200).json({ message: 'Logged In Successfully', success: true, });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
}

// user logout
export const userLogout = async (req,res) => {
    
    // clear the cookie when user logs out 
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // use secure cookies in production
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',// Use 'none' for cross-origin in production, 'lax' for local development
        maxAge: 0
    })
    res.status(200).json({ message: 'Logged Out Successfully' });
}