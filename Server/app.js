import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
import cors from 'cors'; 
import './models/connection.js'
import bookRoute from './routes/bookRoute.js';

// initalizing the app
const app = express();

// Load environment variables
configDotenv();

// intializing the port
const PORT = process.env.PORT || 8001;

// middlewares
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded request bodies
app.use(cookieParser()); // Enable Cookie Parsing
app.use(cors());

// test route
app.get('/', (req,res) => {
    res.send('Hello')
})

// defining the routes
app.use('/libarylane', bookRoute);

// Start the server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));