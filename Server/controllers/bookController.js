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
export const getFreeBookContent = async (req, res) => {
    const { freebookId } = req.params;  // Fetching the free book ID from params
    try {
        // Fetch book content from the database by ID
        const freeBookContent = await BookModel.findById(freebookId);
        
        // If the book is not found
        if (!freeBookContent) return res.status(404).json({ message: 'Free Book Not Found' });
        
        // Return the full content of the book
        return res.status(200).json({
            message: 'Free Book Content Found',
            book: freeBookContent  // Send full book content, not just the ID
        });
    } catch (error) {
        console.error('Error Fetching The Free Book:', error);
        res.status(500).json({ message: 'Error Fetching the Free Book' });
    }
};


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
export const getPaidBookContent = async (req, res) => {
    const { bookid } = req.params; // Fetching paid books ID from params
    try {
        // Fetch book content from the database by ID
        const paidBookContent = await BookModel.findById(bookid);
        
        // If the book is not found
        if (!paidBookContent) return res.status(404).json({ message: 'Book Content Not Found' });

        // Return the full content of the book
        return res.status(200).json({
            message: "Book Content Found",
            book: paidBookContent // Ensure full book details are returned
        });
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching the Books' });
    }
};
