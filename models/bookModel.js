const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    serialNumber: {
        type: Number,
        required:[true,'Serial Number Required !!'],
        unique: true,
    },
    bookName: {
        type: String,
        required: [true, 'A Book must have a name']
    },
    authorName: {
        type: String,
        required: [true, 'A Book must have a Author name']
    },
    dateOfPublication: {
        type: String,
        required: [true, 'A Book must have a date of publication']
    },
    description: {
        type: String,
        required: [true, 'A Book must have a description']
    },
    noOfTimesBorrowed: {
        type: Number
    },
    noOfBooksInStore: {
        type: Number,
        required: [true, 'Should definitely have initial stocks']
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const bookData = mongoose.model('BookData',bookSchema);

module.exports = bookData;