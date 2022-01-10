const express = require('express');
const userRouter = require('./routes/userRoutes')
const bookRouter = require('./routes/bookRoutes')


const app = express();
app.use(express.json());
app.use((req, res,next) => {
    console.log(req.headers);
    next();
})

// Routes
app.use('/api/users',userRouter);
app.use('/api/books',bookRouter);

// ERROR DETECTOR
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(err.message);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

module.exports = app;