var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/productController');
var user_controller = require('../controllers/userController');
var admin_controller=require('../controllers/adminController');

var login_url = 'http://gamestore.vn/index.php?route=account/login';
var register_url = 'http://gamestore.vn/index.php?route=account/register';
/* GET home page. */
router.get('/',product_controller.product_list);
router.get('/product/:id',product_controller.product_detail);
router.get('/category/:category_name',product_controller.product_category);

// GET user activity
router.get('/login', user_controller.login_form);
router.get('/register', user_controller.register_form);
router.get('/user', user_controller.user_info);
//GET Admin activity
router.get('/admin', admin_controller.dashboard);
router.get('/admin/product', admin_controller.product_admin);
router.get('/admin/product/add', admin_controller.add_product);
router.post('/admin/product/add', admin_controller.add_product_post);
router.get('/admin/product/edit/:id',admin_controller.product_edit_get);
router.post('/admin/product/edit/:id',admin_controller.product_edit_post);
router.get('/admin/product/delete/:id',admin_controller.product_delete);
module.exports = router;
