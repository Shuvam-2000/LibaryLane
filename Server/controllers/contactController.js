import ContactModel from "../models/contact.js";

export const getContactInfo = async (req,res) => {
    // fetch all required fields from the frontend
    const { fullname, email, message } = req.body;  

    // check all fields are given
    if(!fullname || !email || !message) return res.status(403).json({ 
        message: 'All Fields Required', 
        success: false });
    try {
        // create a contact field with details in the db
        const newMessage = new ContactModel({
            fullname, 
            email, 
            message
        });
        await newMessage.save();
        res.status(200).json({ message: 'Message Received', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Intenral Server Error', success: false })
    }
}