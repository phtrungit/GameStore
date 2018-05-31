var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var admin_controller = require('../controllers/adminController');

router.get('/login', admin_controller.login);
router.post('/login', admin_controller.login_form_post);
router.get('/logout', admin_controller.logout);
router.get('/',admin_controller.isLoggedIn, admin_controller.dashboard);
router.get('/product',admin_controller.isLoggedIn, admin_controller.product_admin);
router.get('/product/add',admin_controller.isLoggedIn, admin_controller.add_product);
router.post('/product/add',admin_controller.isLoggedIn, admin_controller.add_product_post);
router.get('/product/edit/:id',admin_controller.isLoggedIn,admin_controller.product_edit_get);
router.post('/product/edit/:id',admin_controller.isLoggedIn,admin_controller.product_edit_post);
router.get('/product/delete/:id',admin_controller.isLoggedIn,admin_controller.product_delete);

module.exports = router;