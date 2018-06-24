var User=require('../models/user');
var passport=require('passport');
var flash=require('connect-flash');
var Cart = require('../models/cart');
var Order = require('../models/order');

exports.login_form = function (req, res, next){
	var messages=req.flash('error');
    res.render('./users/user_login',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
};
exports.login_form_post = passport.authenticate('local.signin', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
});


exports.register_form = function (req, res, next){
	var messages=req.flash('error');
    res.render('./users/user_register',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
};
exports.register_form_post = passport.authenticate('local.signup', {
    successRedirect: '/register-success',
    failureRedirect: '/user/register',
    failureFlash: true
});

/*exports.register_form_post =function(req,res,next) {
    passport.authenticate('local.signup', {
        failureFlash: true,
        failureRedirect: '/user/register'
    },function (err,user,info) {
        if (err)
        {
            return next(err);
        }
        if(!user)
        {
            res.redirect('/user/register')
        }
        else
            res.render('./users/register_success',{email:user.mail});

    })(req, res, next);
};*/
exports.user_info = function (req, res, next){
    if(req.session.cart)
    {
        totalQty=req.session.cart.totalQty;
        totalPrice=req.session.cart.totalPrice;
    }
    else
    {
        totalQty=0;
        totalPrice=0;
    }
    res.render('./users/user_info',{layout:'user_layout',name:req.user.name,username:req.user.username,email:req.user.mail,phone:req.user.phone,totalPrice:totalPrice,totalQty:totalQty});
};
exports.user_logout = function (req, res, next){
    req.logout();
    res.redirect('/user/login');
};
exports.isLoggedIn=function (req, res, next) {
    if (req.isAuthenticated() && req.user.isActivated) {
        return next();
    }
        res.redirect('/user/login');
};
exports.notLoggedIn=function (req, res, next) {
    if (!req.isAuthenticated() ) {
        return next();
    }
        res.redirect('/');
};

exports.checkout = function (req,res,next) {
    if (!req.session.cart) {
        return res.render('./shop/cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('./shop/detail_cart',{layout:'user_layout',username:req.user.username,products: cart.generateArray(), totalPrice: cart.totalPrice,totalQty:cart.totalQty});
};
exports.buy =function (req,res,next) {
    order = new Order();
    var cart = new Cart(req.session.cart);
    order.cart=cart.generateArray();
    order.customer=req.user;
    order.customer_name=req.user.name;
    order.status='Chưa thanh toán';
    order.deliver='Chưa giao';
    order.TotalQty=cart.totalQty;
    order.TotalPrice=cart.totalPrice;
    var date =new Date();
    order.date=date;
    order.save(function(err, result) {
        if (err) { return next(err); }
        req.session.cart=null;
        res.render('./shop/buy_success',{layout:'user_layout',username:req.user.username,totalQty:0,totalPrice:0});
    });

};