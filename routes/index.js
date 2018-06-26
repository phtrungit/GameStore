var express = require('express');
var router = express.Router();


var guest_controller = require('../controllers/guestController');
var search_controller = require('../controllers/search');

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
<<<<<<< HEAD

router.get('/search',search_controller.search_results);
router.post('/search-result',search_controller.search_results_page);
=======
router.post('/comment/:name/:content/:id_product', guest_controller.comment);
router.get('/fetchProduct/:id',guest_controller.fetch_product);

>>>>>>> 45ea5cb917b4ad7a34d59c9d79f9091f000ba419

module.exports = router;
