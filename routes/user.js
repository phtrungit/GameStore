var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var manager = require('connect-ensure-login');
router.use(csrfProtection);
var user_controller = require('../controllers/userController');
router.get('/login', user_controller.login_form);
router.post('/login', user_controller.login_form_post);
router.get('/register', user_controller.register_form);
router.post('/register', user_controller.register_form_post);
router.get('/logout', user_controller.user_logout);
router.get('/detail',user_controller.isLoggedIn, user_controller.user_info);
router.get('/checkout',manager.ensureLoggedIn('/user/login'), user_controller.checkout);
router.get('/buy',manager.ensureLoggedIn('/user/login'), user_controller.buy);
router.get('/order_list',manager.ensureLoggedIn('/user/login'), user_controller.order_list);
router.get('/order_detail/:id',manager.ensureLoggedIn('/user/login'), user_controller.order_detail);
module.exports = router;