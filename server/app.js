const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const admin = require('./routes/admin');
const public = require('./routes/public');
const ExpressError = require('./expressError');
const { isAuthenticated, isAdmin } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const port = process.env.PORT || 3000;


app.use(cors()); // Enabale ALL CORS Requests
app.use(helmet()); // Security headers
app.use(express.json()); //For Parsing json
app.use(express.urlencoded({ extended: true })); //For parsing application
app.use(morgan('tiny'));

// Set up middleware, routes, etc.

//Middleware
app.use('/admin', isAdmin, isAuthenticated, admin);
app.use('/', public);

app.use(errorHandler); // Error handling middleware

// Static file hosting//
app.use(express.static('public'));



//404 message//
app.use((req,res,next) => {
    res.status(404).send("Not Found");
});

// Error Handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is broken');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
module.exports = app;
