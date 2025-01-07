import BookModel from "../models/book.js";

export const getBookInfo = async (req,res) => {
    try {
        const book = await BookModel.find()
        res.status(200).json({message: "Book Found", book})
    } catch (error) {
        console.log('Error', error)
        res.status(500),json({message: "No Book Found"})
    }
}
