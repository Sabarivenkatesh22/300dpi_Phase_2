const express = require('express');
const userController = require('../controller/userController');
const borrowBookController = require('../controller/borrowBookController');
const router = express.Router();

router.post('/addUser',userController.addUser);
router.post('/addUserBorrowedDetails',borrowBookController.addBorrowBook);
router.get('/UserDetails/:id',userController.userDetails);
router.get('/showAllUsers',userController.showAllUsers);

module.exports = router;