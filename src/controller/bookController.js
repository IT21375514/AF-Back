import Book from "../model/book.js";

export const listBooks = async (req,res) => {
    try{
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({message:"Error fetching books",error:"err"});
    }
} 

export const searchBooks = async (req,res) => {

    const {query} = req.query;

    try {
        const books = await Book.find({
            $or: [
                {title:{$regex: query, $options:'i'}},
                {author:{$regex: query, $options:'i'}},
                {genre:{$regex: query, $options:'i'}}
            ]
        });
        res.json(books);
    } catch {
        res.status(500).json({message:"Error searching books",error:"err"});
    }
}

export const purchaseBook = async (req,res) => {

    const bookId = req.params.id;
    try {
        const book = await Book.findById(bookId);
        // const book = await Book.findOne({id:bookId});

        if(!book){
            return res.status(404).json({message:"Book not found",error:"err"});
        }

        if(!book.availability){
            return res.status(400).json({message:"Book not available",error:"err"});
        }

        const payment = true;

        if(!payment){
            return res.status(500).json({message:"Payment failed",error:"err"});
        }

        book.availability=false;
        await book.save();
        return res.json({message:"Book purchased",book});
    } catch {
        res.status(500).json({message:"Error purchase",error:"err"})
    }

}

export const addBook = async(req,res) => {

    const {id,title,author,genre,price,availability} = req.body;
    try {
        const newBook = new Book ({id,title,author,genre,price,availability});
        const savedBook = await newBook.save();
        return res.status(201).json(savedBook);
    } catch {
        res.status(500).json({message:"Error adding book",error:"err"})
    }
}

export const deleteBook = async (req,res) => {

    const bookId = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully', book });
    } catch {
        res.status(500).json({ message: 'Error deleting book', error: err });
    }

}