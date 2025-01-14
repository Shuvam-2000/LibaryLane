import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
import cors from 'cors'; 
import './models/connection.js'
import bookRoute from './routes/bookRoute.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';

// initalizing the app
const app = express();

// Load environment variables
configDotenv();

// intializing the port
const PORT = process.env.PORT || 8001;

// middlewares
app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded request bodies
app.use(cookieParser()); // Enable Cookie Parsing
app.use(cors(
    {
        origin: process.env.FRONTEND_URL, // Frontend URL
        credentials: true,  // Allow credentials (cookies) 
    }
)); 

// test route
app.get('/', (req,res) => {
    res.send('Hello')
})

// defining the routes for the appllication
app.use('/libarylane', bookRoute);   // book route
app.use('/user', userRoute);   // user route
app.use('/auth', authRoute)  // auth route(for handling user authentication globally)
app.use('/userContact', contactRoute)  // contactinfo route 

// Start the server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));