let mongoose = require('mongoose');

let userschema = mongoose.Schema({
    name: { type: String, required: false },
    brand: { type: String, required: false },
    cat: { type: String, required: false },
    gender: { type: String, required: false },
    price: { type: Number, required: false },
    details: { type: String, required: false },
    images: { type: String, required: false },
})
let productmodel = mongoose.model('products', userschema)

module.exports = productmodel;