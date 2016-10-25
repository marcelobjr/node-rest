var validator = require('validator');


	var Validators = function(teste) {


		return validator.isEmail(teste.email);

            
        };




module.exports = Validators;