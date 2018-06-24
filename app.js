var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var expressHbs=require('express-handlebars');
var mongoose=require('mongoose');
var session=require('express-session');
var passport=require('passport');
var flash=require('connect-flash');
var validator = require('express-validator');
var MongoStore=require('connect-mongo')(session);
var Handlebars = require("handlebars");
var NumeralHelper = require("handlebars.numeral");
NumeralHelper.registerHelpers(Handlebars);
var app = express();
var mongoDB = 'mongodb://admin:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB);
require('./config/passport');
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
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
