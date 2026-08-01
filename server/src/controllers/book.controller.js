const Book = require("../models/Book.model");

// ===========================
// Add Book
// ===========================

const addBook = async (req, res) => {

    try {

        const {
            category,
            subject,
            title,
            pdfUrl,
            isFree
        } = req.body;

        const book = await Book.create({
            category,
            subject,
            title,
            pdfUrl,
            isFree
        });

        res.status(201).json({
            success: true,
            message: "Book Added Successfully",
            book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================
// Get All Books
// ===========================

const getBooks = async (req, res) => {

    try {

        const books = await Book.find().sort({
            createdAt: -1
        });

        res.json({
            success: true,
            books
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================
// Delete Book
// ===========================

const deleteBook = async (req, res) => {

    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {

            return res.status(404).json({
                message: "Book not found"
            });

        }

        res.json({

            success: true,

            message: "Book Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {

    addBook,

    getBooks,

    deleteBook

};