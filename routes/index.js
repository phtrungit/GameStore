var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/productController');
/* GET home page. */
router.get('/',product_controller.product_list);
router.get('/:id',product_controller.product_detail);
router.get('/category/:category_name',product_controller.product_category);

module.exports = router;
