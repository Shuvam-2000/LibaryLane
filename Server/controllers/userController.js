import UserModel from "../models/user.js";
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

// new user signup
export const userSignUp = async (req,res) => {
    try {
        const { username, email, password } = req.body;

        // authenticate if the user already exists with email
        const user = await UserModel.findOne({ email }) 
        if(user) return res.status(409).json({ message: 'User Already Exists', success: false })

        // register new user with required fields and securely hash the password
        const registerNewUser = new UserModel({ username, email, password });
        registerNewUser.password = await bycrpt.hash(password, 10);  // hash the password with bycrpt
        await registerNewUser.save();    // save the password in the db
        res.status(201).json({ message: "SignUp SuccessFull", success: true })
    } catch (error) {
        res.status(500).json({ message: 'Interal Server Error', success: false })
    }
}


