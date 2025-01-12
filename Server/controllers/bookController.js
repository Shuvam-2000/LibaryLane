import BookModel from "../models/book.js";

// fetching free books from the database
export const getFreeBooks = async (req,res) => {
    try {
        // fetch only free books from the database
        const freeBooks = await BookModel.find();
        res.status(200).json({ message: "Free Book Found", freeBooks });
    } catch (error) {
        console.log('Error Fecthing Free Books', error)
        res.status(500).json({ message: "Error Fecthing Free Books" })
    }
}

// fetching content of the free book with id
export const getFreeBookContent = async (req,res) => {
    const { freebookId } = req.params;  // fetching free books id
    try {
        
        // fetch book content from the database by Id
        const freeBookContent = await BookModel.findById(freebookId);
        if(!freeBookContent) return res.status(404).json({ message: "Free Books Not Found"});
        return res.status(200).json({ message: "Free Book Content Found" , id: freebookId })
    } catch (error) {
        
    }
}

// fetching paid books from the database
export const getPaidBooks =  async (req,res) => {
    try {
        // fetch only paid books from the database
        const paidBooks = await BookModel.find({ category: { $ne: 'Free' } });
        res.status(200).json({ message: "Paid Books Found", paidBooks });
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Books" });
    }
}

// fectching content of the paid books with the ID
export const getPaidBookContent = async (req,res) => {
    const { bookid } = req.params; // fetching paid books id
    try {

        // / Fetch book content from the database by ID
        const paidBookContent = await BookModel.findById(bookid);
        if(!paidBookContent) return res.status(404).json({ message: 'Book Content Not Found'});
        return res.status(200).json({ message: "Book Content Found", id: bookid });
    } catch (error) {
        console.error('Error Fetching The Books', error);
        res.status(200).json({ message: 'Error Fetching the Books' });
    }
}
