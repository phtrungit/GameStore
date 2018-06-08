var passport=require('passport');
var User=require('../models/user');
var LocalStrategy=require('passport-local').Strategy;
var randtoken = require('rand-token');
var expressValidator = require('express-validator');
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "dhtgamestore@gmail.com",
        pass: "123456789Trung"
    }
});
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, username, password, done) {
    req.checkBody('username', 'Invalid username').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min:4});
    req.checkBody('repeat_password', 'Invalid repeat_password').notEmpty().isLength({min:4});
    req.checkBody('name', 'Invalid name').notEmpty();
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('phone', 'Invalid phone').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
           messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'username': username}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Username is already in use.'});
        }
        var newUser = new User();
        var token = randtoken.generate(16);
        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);
        newUser.name=req.body.name;
        newUser.mail=req.body.email;
        newUser.phone=req.body.phone;
        newUser.imagePath='';
        newUser.isAdmin=false;
        newUser.isActivated=false;
        newUser.tokenAuth=token;
        newUser.save(function(err, result) {
           if (err) {
               return done(err);
           }
            var link="http://"+req.get('host')+"/verify?id="+token;
            let mailOptions={
                from: ' "DHTGameStore" <dhtgamestore@gmail.com>',
                to : newUser.mail,
                subject : "Please confirm your Email account",
                html : "Hello,"+newUser.username+"<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
            };
            smtpTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
           return done(null, newUser);
        });
    });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done) {
    req.checkBody('username', 'Invalid username').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'username': username}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'No user found.'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Wrong password.'});
        }
        if (!user.isActivated) {
            return done(null, false, {message: 'Vui lòng kích hoạt tài khoản trước khi đăng nhập!'});
        }
        return done(null, user);
    });
}));

passport.use('local.signin_admin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done) {
    req.checkBody('username', 'Invalid username').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'username': username}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'No user found.'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Wrong password.'});
        }
        if (!user.isAdmin) {
            return done(null, false, {message: 'Your user account does not have permission to access'});
        }
        return done(null, user);
    });
}));