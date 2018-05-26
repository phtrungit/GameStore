var Product=require('../models/product');
var Category=require('../models/category');

exports.product_list = function (req, res, next) {

    Product.find()
        .exec(function (err, list_products) {
            if (err) { return next(err); }
            // Successful, so render.
            var productChunk=[];
            var chunkSize=3;
            for (var i = 0; i <list_products.length; i+=chunkSize) {
            	productChunk.push(list_products.slice(i,i+chunkSize));
            }
            if (req.isAuthenticated()) {
                    res.render('index', { product_list: productChunk,layout:'user_layout',username:req.user.username});
                }
            else
            res.render('index', { product_list: productChunk,layout:'layout'});
        })

};

exports.product_detail = function (req, res, next) {

    Product.findById(req.params.id)
        .exec(function (err, detail_products) {
            if (err) { return next(err); }
            // Successful, so render.
                res.render('./products/product_detail', { product_detail: detail_products });
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
            res.render('./products/product_category', { product_category: productChunk,category_name:req.params.category_name });
        })

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