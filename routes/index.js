var express = require('express');
var router = express.Router();


var guest_controller = require('../controllers/guestController');


/* GET home page. */
router.get('/',guest_controller.product_list);
router.get('/:page',guest_controller.product_list);
router.get('/product/:id',guest_controller.product_detail);
router.get('/category/:category_name',guest_controller.product_category);
router.post('/add-to-cart/:id',guest_controller.addToCart);
router.post('/add-to-cart/:id/:qty',guest_controller.addToCartQty);
router.get('/shopping-cart',guest_controller.shopping_cart);

module.exports = router;
