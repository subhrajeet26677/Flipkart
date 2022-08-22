let express = require('express');
let productcontroller = require('../controller/productcontroller')
let multer = require('../middleware/multer')

let productrouter = express.Router();

productrouter.get('/getproducts', productcontroller.getproducts)
productrouter.get('/find/:cat', productcontroller.findbycatogary);

productrouter.post('/addproduct', productcontroller.addfile);


module.exports = productrouter;