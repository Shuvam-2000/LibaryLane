import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: {
        type: String
    },
    title: {
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
    }
})

const BookModel = mongoose.model('books', BookSchema)

export default BookModel;