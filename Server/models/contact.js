import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, },
    message: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('contact', ContactSchema);

export default ContactModel;