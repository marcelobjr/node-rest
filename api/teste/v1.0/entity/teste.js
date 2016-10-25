var mongoose = require('mongoose');

var Testes = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    rg: {
        type: Number,
        required: true
    },
    nasc: {
        type: Date,
        //default: Date.now
    }
});

module.exports = mongoose.model('Testes', Testes);