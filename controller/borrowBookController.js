const BorrowBook = require('../models/borrowModel');
const User = require('../models/userModel');
const appError = require('../utils/appError');

class BorrowBookController
{
    async addBorrowBook(req, res, next)
    {
        try {

            const userCheckForDailyQuota = await User.find({registerNumber:req.body.registerNumber});
            if(userCheckForDailyQuota > 1){
                return next(new appError("You already crossed the daily quota limit", 401));
            }
            const borrowBook = await BorrowBook.create({
                registerNumber:req.body.registerNumber,
                bookBorrowedDate:req.body.bookBorrowedDate,
                deadlineToReturn:req.body.deadlineToReturn,
                nameOfBookBorrowed:req.body.nameOfBookBorrowed
            });
            userCheckForDailyQuota.nameOfBookBorrowed = borrowBook.nameOfBookBorrowed + 1;
            await userCheckForDailyQuota.save();
            res.status(200).json({
                status:'success',
                message:'Data added Successfully'
            })
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    }
}

const borrowBookController = new BorrowBookController();
module.exports = borrowBookController;