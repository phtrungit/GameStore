var express = require('express');
var router = express.Router();


var guest_controller = require('../controllers/guestController');


/* GET home page. */
router.get('/',guest_controller.product_list);
router.get('/page/:page',guest_controller.product_list);
router.get('/product/:id',guest_controller.product_detail);
router.get('/category/:category_name',guest_controller.product_category);
router.post('/add-to-cart/:id',guest_controller.addToCart);
router.post('/add-to-cart/:id/:qty',guest_controller.addToCartQty);
router.get('/shopping-cart',guest_controller.shopping_cart);
router.get('/verify',guest_controller.verifyUser);
router.get('/register-success',guest_controller.register_success);
router.get('/forget-password',guest_controller.req_recover_password);
router.post('/forget-password',guest_controller.req_recover_password_post);
router.get('/recover',guest_controller.recover_password);
router.post('/recover',guest_controller.recover_password_post);
router.post('/comment', guest_controller.comment);



module.exports = router;
