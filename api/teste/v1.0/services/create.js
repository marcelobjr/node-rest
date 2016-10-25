var Testes = require('./../entity/teste');
var validator = require('./../validators/teste');


var Service = function(req, res, next) {

    var product = new Testes(req.body);

    console.log(validator(product));

    product
        .save()
        .then(function(product) {
           if (!product) {
               return res.status(404)
                         .json({
                             status: false,
                             data  : {}
                         });
           }

           return res.status(200)
                     .json({
                         status: true,
                         data  : product
                     });
        })
        .catch(function(err) {
            return res.status(500)
                      .json({
                          status: false,
                          data  : {}
                      });
        });
};

module.exports = Service;