const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const Handlebars = require("handlebars");
const NumeralHelper = require("handlebars.numeral");
NumeralHelper.registerHelpers(Handlebars);
const app = express();
const mongoDB = 'mongodb://admin:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB, { useNewUrlParser: true });
require('./config/passport');
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// view engine setup
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret:'normalsecretkey',
	resave:false,
	saveUninitialized:false,
	store: new MongoStore({ mongooseConnection: mongoose.connection }),
	cookie: {maxAge: 12*60*60*1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.locals.session=req.session;
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err)
        {
            return next(err);
        }
        if (!user)
        {
            return res.redirect('/login');
        }

    })(req, res, next);
});
module.exports = app;
