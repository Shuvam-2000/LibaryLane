import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title: {
        type: String
    },
    auhtor: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    genre: { 
        type: String 
    }, 
    story: { 
        type: String 
    }, 
})

const BookModel = mongoose.model('books', BookSchema)

export default BookModel;