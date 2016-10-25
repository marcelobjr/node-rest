var Testes = require('./../entity/teste');

var Service = function(req, res, next) {
    var find = {};

    if (req.params.id) {
        find = Testes.findById(req.params.id).exec();
    }

    if (!req.params.id) {
        find = Testes.find({}).exec();
    }

    find
        .then(function(result) {
            if (!result) {
                return res.status(404)
                          .json({
                              status: false,
                              data  : {}
                          });
            }

            return res.status(200)
                      .json({
                          status: true,
                          data  : result
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