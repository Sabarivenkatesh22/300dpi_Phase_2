const Book = require('../models/bookModel');
const appError = require('../utils/appError');

class BookController
{
    async addBook(req, res, next)
    {
        try {
            const book = await Book.create({
                serialNumber:req.body.serialNumber,
                bookName:req.body.bookName,
                authorName:req.body.authorName,
                description:req.body.description,
                dateOfPublication:req.body.dateOfPublication,
                noOfTimesBorrowed:req.body.noOfTimesBorrowed,
                noOfBooksInStore:req.body.noOfBooksInStore
            });
            res.status(200).json({
                status:'success',
                message:'Data added Successfully'
            })
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    };

    async showAllBooks(req, res, next) {

        try {
            const allBooks = await Book.find();
            res.status(200).json({
                status:'success',
                results: allBooks.length,
                data:{
                    allBooks
                }
            });
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    }
}

const bookController = new BookController();
module.exports = bookController;