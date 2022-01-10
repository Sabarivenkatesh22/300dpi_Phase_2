const express = require('express');
const bookController = require('../controller/bookController');
const router = express.Router();

router.post('/addBook',bookController.addBook);
router.get('/showAllBooks',bookController.showAllBooks);

module.exports = router;