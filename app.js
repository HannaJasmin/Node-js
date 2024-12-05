var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectToPostgres = async () => await sequelize.authenticate();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var departmentRouter=require('./routes/department');
var employeeRouter=require('./routes/employee');
var workRouter=require('./routes/work');
const { sequelize } = require('./config/db');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/department',departmentRouter);
app.use('/employee',employeeRouter);
app.use('/work',workRouter);

connectToPostgres()
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
         console.error("could not connect to the database.Existing now...",err);
    });

    app.use((req, res, next) => {
        console.log(`Request method: ${req.method}, URL: ${req.url}`);
        next();
      })
      
module.exports = app;