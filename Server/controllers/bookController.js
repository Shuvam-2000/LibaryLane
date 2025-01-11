import BookModel from "../models/book.js";

// fetching free books from the database
export const getFreeBooks = async (req,res) => {
    try {
        // fetch only free books from the database
        const freeBooks = await BookModel.find({ category: 'Free' });
        res.status(200).json({ message: "Free Book Found", freeBooks });
    } catch (error) {
        console.log('Error Fecthing Free Books', error)
        res.status(500).json({message: "Error Fecthing Free Books"})
    }
}

// fetching paid books from the database
export const getPaidBooks =  async (req,res) => {
    try {
        // fetch only paid books from the database
        const paidBooks = await BookModel.find({ category: { $ne: 'Free' } });
        res.status(200).json({ message: "Paid Books Found", paidBooks });
    } catch (error) {
        console.log('Error Fetching Paid Books', error)
        res.status(500).json({ message: "Error Fetching Books" });
    }
}
