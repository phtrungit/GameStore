var Product= require('../models/product');
var Category= require('../models/category');
var Cart = require('../models/cart');

//var count = Product.count();
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
                if (req.isAuthenticated()) {
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
            // Successful, so render.
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
            if(req.isAuthenticated())
                res.render('./products/product_detail', { layout:'user_layout',username:req.user.username,product_detail: detail_products,totalQty:totalQty,totalPrice:totalPrice });
            else
                res.render('./products/product_detail', { product_detail: detail_products,totalQty:totalQty,totalPrice:totalPrice });
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
            if(req.isAuthenticated())
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
exports.shopping_cart =function (req,res,next) {
    if (!req.session.cart) {
        return res.render('./shop/cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    console.log('Cart info');
    console.log(cart);
    if(req.isAuthenticated())
        res.render('./shop/cart', {layout:'user_layout',username:req.user.username,products: cart.generateArray(), totalPrice: cart.totalPrice,totalQty:cart.totalQty});
    else
        res.render('./shop/cart', {products: cart.generateArray(), totalPrice: cart.totalPrice,totalQty:cart.totalQty});
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