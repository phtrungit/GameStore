var express = require('express');
var router = express.Router();

var Product = require('../models/product');

exports.search_results = function(req,res,next){
    var key = req.query.q;
    Product.find({
        title: {$regex: '.*'+ key +'.*', $options: 'i'}
    },function(err,data){
        res.json(data);
    })
}

exports.search_results_page = function (req, res, next) {
    var key = req.body.search_input;
    
    Product.find({
        title: {$regex: '.*'+ key +'.*', $options: 'i'}
    }).exec(function (err, search_list) {
        console.log(key);
        console.log(search_list);
            Product.count().exec(function(err, count) {
                if (err) { return next(err); }
                // Successful, so render.
                var productChunk=[];
                var chunkSize=3;
                for (var i = 0; i <search_list.length; i+=chunkSize) {
                    productChunk.push(search_list.slice(i,i+chunkSize));
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
                    res.render('./search/search_result', { search_list: productChunk,layout:'user_layout',username:req.user.username,totalQty:totalQty,totalPrice:totalPrice,search_key:key});
                }
                else
                    res.render('./search/search_result', { search_list: productChunk,layout:'layout',totalQty:totalQty,totalPrice:totalPrice,search_key:key});
            })
        })

};