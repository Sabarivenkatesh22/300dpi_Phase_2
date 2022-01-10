const User = require('../models/userModel');
const appError = require('../utils/appError');

class UserController {
    async addUser(req, res, next) {
        try {
            const user = await User.create({
                userName: req.body.userName,
                registerNumber: req.body.registerNumber,
                yearOfStudy: req.body.yearOfStudy
            });
            res.status(200).json({
                status: 'success',
                message: 'Data added Successfully'
            })
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    };

    async userDetails(req, res, next) {

        try {
            const borrowedBookData = await User.find({registerNumber:req.params.id}).populate('borrowedBooks');
            res.status(200).json({
                status:'success',
                results: borrowedBookData.length,
                data:{
                    borrowedBookData
                }
            });
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    };

    async showAllUsers(req, res, next) {

        try {
            const allUsers = await User.find();
            res.status(200).json({
                status:'success',
                results: allUsers.length,
                data:{
                    allUsers
                }
            });
        } catch (error) {
            return next(new appError(error.message, 401));
        }
    }
}

const userController = new UserController();
module.exports = userController;