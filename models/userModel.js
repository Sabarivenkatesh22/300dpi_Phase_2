const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: [true, 'A user must have a name']
    },
    registerNumber: { 
        type: Number,
        required: [true, 'A user must have a Register number'],
        unique:true
     },
    yearOfStudy: {
        type: String,
        required: [true, 'The user should have a year of the study']
    },
    NoOfBooksBorrowedDay:{
        type: Number,
        default: 0,
        // select:false
    }
    //  create a new model that handles bookBorrowing
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// virtual populate fields

userSchema.virtual('borrowedBooks',{
    ref:'borrowBookData',
    foreignField:'registerNumber',
    localField:'registerNumber'
})

const userData = mongoose.model('userData',userSchema);

module.exports = userData;