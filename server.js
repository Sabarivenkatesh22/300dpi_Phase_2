const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

//   console.log(process.env.DATABASE);

  mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!')).catch((err) => console.log(err.message));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${process.env.PORT}`);
});