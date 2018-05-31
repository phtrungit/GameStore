var User=require('../models/user');
var passport=require('passport');
var flash=require('connect-flash');
exports.login_form = function (req, res, next){
	var messages=req.flash('error');
    res.render('./users/user_login',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
};
exports.login_form_post = passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
})


exports.register_form = function (req, res, next){
	var messages=req.flash('error');
    res.render('./users/user_register',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
};
exports.register_form_post = passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/user/register',
    failureFlash: true
})
exports.user_info = function (req, res, next){
    res.render('./users/user_info',{name:req.user.name,username:req.user.username,email:req.user.mail});
};
exports.user_logout = function (req, res, next){
    req.logout();
    res.redirect('/user/login');
};
exports.isLoggedIn=function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}
exports.notLoggedIn=function (req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}