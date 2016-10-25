var mongoose = require('mongoose');

var Products = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome Obrigatório?']
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', Products);