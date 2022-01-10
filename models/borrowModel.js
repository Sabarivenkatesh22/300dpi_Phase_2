const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({

    registerNumber:{
        type:Number,
        unique:true,
    },
    bookBorrowedDate:{
        type:String,
    },
    deadlineToReturn:{
        type:String,
    },
    nameOfBookBorrowed:{
        type:String,
    }
});

const borrowBookData = mongoose.model('borrowBookData',borrowSchema);

module.exports = borrowBookData;