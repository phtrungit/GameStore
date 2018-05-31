var Product=require('../models/product');
var passport=require('passport');
var flash=require('connect-flash');
exports.dashboard = function (req, res, next){
    res.render('./admin/dashboard',{layout:"admin_layout",username:req.user.username});
};

exports.product_admin = function (req, res, next) {

	//res.render('./admin/product',{layout:"admin_layout"})

    Product.find()
        .exec(function (err, list_products) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('./admin/product', { product_list: list_products,layout:"admin_layout"});
        })

};
exports.add_product = function (req, res, next) {

	res.render('./admin/add_product',{layout:"admin_layout",csrfToken:req.csrfToken()})
};

exports.add_product_post = function (req, res, next) {
	var product=new Product({
		imagePath:req.body.product_image,
		title:req.body.product_title,
		description:req.body.product_descr,
		price:req.body.product_price,
		category:req.body.product_category,
		amount:req.body.product_amount,
		status:'available',
        publisher:req.body.product_publisher,
        releaseDate:req.body.product_releaseDate
	});
	product.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('./add');
            });
};

exports.product_edit_get = function (req, res, next) {

Product.findById(req.params.id)
        .exec(function (err, detail_products) {
            if (err) { return next(err); }
            if(detail_products.status="available")
                res.render('./admin/edit_product',{layout:"admin_layout",csrfToken:req.csrfToken(),product:detail_products,available_flag:'checked'});
            else
                res.render('./admin/edit_product',{layout:"admin_layout",csrfToken:req.csrfToken(),product:detail_products,unavailable_flag:'checked'});
        })
   

};
exports.product_edit_post = function (req, res, next) {

var product=new Product({
        imagePath:req.body.product_image,
        title:req.body.product_title,
        description:req.body.product_descr,
        price:req.body.product_price,
        category:req.body.product_category,
        amount:req.body.product_amount,
        status:req.body.product_status,
        _id:req.params.id,
        publisher:req.body.product_publisher,
        releaseDate:req.body.product_releaseDate
    }); 
    Product.findByIdAndUpdate(req.params.id, product, {}, function (err,theproduct) {
                if (err) { return next(err); }
                   // Successful - redirect to genre detail page.
                   res.redirect('/admin/product');
                });

};
exports.product_delete= function(req,res,next){
Product.findByIdAndRemove(req.params.id, function (err) {
                if (err) { return next(err); }
                   // Successful - redirect to genre detail page.
                   res.redirect('/admin/product');
                });
};

exports.login = function (req, res, next) {
    var messages=req.flash('error');
    res.render('./admin/admin_login',{layout:false,csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
};
exports.login_form_post = passport.authenticate('local.signin_admin', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    failureFlash: true
})
exports.logout = function (req, res, next){
    req.logout();
    res.redirect('/admin/login');
};
exports.isLoggedIn=function (req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    res.redirect('/admin/login');
}