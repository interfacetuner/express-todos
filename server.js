// Require Modules
const express = require('express');
const morgan = require("morgan");
const methodOverride = require("method-override");
//index.js router call require
const indexRouter = require('./routes/index');

//todos router call
const todosRouter = require('./routes/todos');

// Create the Express App
const app = express();


// Configure the App (app.set)
// We'll use the ejs view engine
app.set('view engine', 'ejs');


// Mount Middleware (app.use)
app.use(function (req, res, next) {
  console.log('Hello Intrepid Learner!');
  req.time = new Date().toLocaleTimeString();
  next();
});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false
}));

//creates req.body -> from data
app.use(methodOverride('_method'));

// Mount Routes
app.use('/', indexRouter);
app.use("/todos", todosRouter);


// Tell the App to Listen on Port 3000
//function may not be needed
app.listen(3000, function () {
  console.log('Express is listening on port 3000');
});
