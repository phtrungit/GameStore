var Product= require('../models/product');
var User =require('../models/user');
var Category= require('../models/category');
var randtoken = require('rand-token');
var Cart = require('../models/cart');
var Comment = require('../models/comment');
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "dhtgamestore@gmail.com",
        pass: "123456789Trung"
    }
});
exports.product_list = function (req, res, next) {
    var perPage = 9;
    var page = req.params.page || 1;
    Product.find()
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, list_products) {
            Product.count().exec(function(err, count) {
                if (err) { return next(err); }
                // Successful, so render.
                var productChunk=[];
                var chunkSize=3;
                for (var i = 0; i <list_products.length; i+=chunkSize) {
                    productChunk.push(list_products.slice(i,i+chunkSize));
                }
                var totalQty;
                var totalPrice;
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
                if (req.isAuthenticated() && req.user.isActivated) {
                    res.render('index', { product_list: productChunk,layout:'user_layout',username:req.user.username,totalQty:totalQty,totalPrice:totalPrice,current:page,pages:Math.ceil(count / perPage)});
                }
                else
                    res.render('index', { product_list: productChunk,layout:'layout',totalQty:totalQty,totalPrice:totalPrice,current:page,pages:Math.ceil(count / perPage)});
            })
        })

};

exports.product_detail = function (req, res, next) {

    Product.findById(req.params.id)
        .exec(function (err, detail_products) {
            if (err) { return next(err); }
            Comment.find({id_product:req.params.id},function (err,comment_list){
       
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
            if(req.isAuthenticated() && req.user.isActivated)
                res.render('./products/product_detail', { isActivated:true,comment:comment_list,id_product:req.params.id,layout:'user_layout',username:req.user.username,product_detail: detail_products,totalQty:totalQty,totalPrice:totalPrice });
            else
                res.render('./products/product_detail', { isActivated:false,comment:comment_list,id_product:req.params.id,product_detail: detail_products,totalQty:totalQty,totalPrice:totalPrice });
        });


            // Successful, so render.
            
        })

};

exports.product_category = function (req, res, next) {

    Product.find({category:req.params.category_name})
        .exec(function (err, category_products) {
            if (err) { return next(err); }
            var productChunk=[];
            var chunkSize=3;
            for (var i = 0; i <category_products.length; i+=chunkSize) {
                productChunk.push(category_products.slice(i,i+chunkSize));
            }
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
            if(req.isAuthenticated() && req.user.isActivated)
                res.render('./products/product_category', { layout:'user_layout',username:req.user.username,product_category: productChunk,category_name:req.params.category_name,totalQty:totalQty,totalPrice:totalPrice });
            else
                res.render('./products/product_category', { product_category: productChunk,category_name:req.params.category_name,totalQty:totalQty,totalPrice:totalPrice });
        })

};
exports.addToCart = function (req, res, next) {

    var productId=req.params.id;
    console.log(productId);
    console.log(req.session.cart);
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log(cart);
    Product.findById(productId, function (err, product) {
        cart.add(product, product._id);
        req.session.cart = cart;

        res.redirect('/');
    });
};
exports.addToCartQty = function (req, res, next) {

    var productId=req.params.id;
    var qty =req.params.qty;

    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log(cart);
    Product.findById(productId, function (err, product) {
        var i;
        for (i=0;i<qty;i++)
        {
            cart.add(product, product._id);
        }

        req.session.cart = cart;

        res.redirect('/');
    });
};
exports.del_item_cart = function (req, res, next) {

    var productId=req.params.id_product;

    var cart = new Cart(req.session.cart);
    var new_cart = new Cart({});
    var arr=cart.generateArray();
    for (var item in arr)
    {
        if(arr[item].item._id!=productId)
        {
            console.log(arr[item].item._id+"---"+productId)
            new_cart.add(arr[item].item,arr[item].item._id)
        }

    }
        req.session.cart = new_cart;
        res.redirect('/shopping-cart');

};
exports.shopping_cart =function (req,res,next) {
    if (!req.session.cart) {
        return res.render('./shop/cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    console.log('Cart info');
    console.log(cart);
    if(req.isAuthenticated() && req.user.isActivated)
        res.render('./shop/cart', {layout:'user_layout',username:req.user.username,products: cart.generateArray(), totalPrice: cart.totalPrice,totalQty:cart.totalQty});
    else
        res.render('./shop/cart', {products: cart.generateArray(), totalPrice: cart.totalPrice,totalQty:cart.totalQty});
};

exports.verifyUser = function (req,res,next) {

    var token=req.query.id;

    User.find({tokenAuth:token},function (err,user){
        console.log(user);
        var token = randtoken.generate(30);
        var new_user = new User({
            isActivated:true,
            tokenAuth:token,
            _id:user[0]._id
        });
        console.log(new_user);
        User.findByIdAndUpdate(user[0]._id, new_user, {}, function (err,result) {
            if (err) { return next(err); }
            // Successful - redirect to genre detail page.
        });
        res.render('./notification',{message:'Tài khoản kích hoạt thành công!'});
    });
};

exports.register_success = function (req,res,next) {
    var email=req.user.mail;
    res.render('./notification',{message:'Email kích hoạt tài khoản đã gửi vào hòm thư của bạn!\n' +
        '<br>\n' + 'Vui lòng truy cập vào địa chỉ hòm thư '+email+ ' để kích hoạt tài khoản!'});
};
exports.req_recover_password = function (req,res,next) {
    res.render('./users/forget_password');
};
exports.req_recover_password_post = function (req,res,next) {
    var username=req.body.username;

    User.find({username:username},function (err,user){
        console.log(user);
        if(user[0]==undefined)
        {
            res.render('./users/recover_password',{error:'Tài khoản không tồn tại'});
        }else if(!user[0].isActivated)
        {
            res.render('./users/recover_password',{error:'Tài khoản chưa được kích hoạt'});
        }
        else
        {
            var token = randtoken.generate(30);
            var new_user = new User({
                tokenAuth:token,
                _id:user[0]._id
            });
            User.findByIdAndUpdate(user[0]._id, new_user, {}, function (err,result) {
                if (err) { return next(err); }
                // Successful - redirect to genre detail page.
            });

            var link="http://"+req.get('host')+"/recover?id="+token;
            let mailOptions={
                from: ' "DHTGameStore" <dhtgamestore@gmail.com>',
                to : user[0].mail,
                subject : "Xác nhận thay đổi mật khẩu",
                html : "Hello,"+user[0].username+"<br> Please Click on the link to change your password.<br><a href="+link+">Click here to continue</a>"
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
            res.render('./notification',{message:'Link thay đổi mật khẩu đã gửi vào hòm thư của bạn!\n' +
                '<br>\n' + 'Vui lòng truy cập vào địa chỉ hòm thư '+user[0].mail+ ' và làm theo hướng dẫn!'});
        }
    });
};

exports.recover_password = function (req,res,next) {

    var token=req.query.id;
    res.render('./users/recover_password',{token:token});
};
exports.recover_password_post = function (req,res,next) {

    User.find({tokenAuth:req.body.token},function (err,user){
        console.log(user);
        var new_user = new User({
            _id:user[0]._id
        });
        var token = randtoken.generate(30);
        new_user.tokenAuth=token;
        new_user.password=new_user.encryptPassword(req.body.new_pass);
        console.log(new_user);
        User.findByIdAndUpdate(user[0]._id, new_user, {}, function (err,result) {
            if (err) { return next(err); }
            // Successful - redirect to genre detail page.
        });
        res.render('./notification',{message:'Thay đổi mật khẩu thành công!'});
    });
};
exports.comment =function (req,res,next) {
   var new_comment =new Comment();
   new_comment.name=req.params.name;
   new_comment.content=req.params.content;
   new_comment.id_product=req.params.id_product;
   var date =new Date();
   new_comment.date=date;

new_comment.save(function(err, result) {
        if (err) { return next(err); }
        console.log(req.params.id_product);
        res.redirect('/product/'+req.params.id_product);
    });
};
exports.fetch_product =function (req,res,next) {
    Comment.find({id_product:req.params.id},function (err,user){

        res.send(user);
    });
};
/*
exports.product_list = function (req, res, next) {
    async.parallel({
        product: function (callback) {
            Product.find()
                .exec(callback)
        },
        category: function (callback) {
            Category.find()
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('index', { product_list: results.product, category_list: results.category});
    });
};
*/