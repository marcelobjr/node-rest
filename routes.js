module.exports = function (app) {
	app.use('/', require('./api'));
	app.use('/products', require('./products'));
    app.use('/api/v1.0/searches', require('./api/v1.0/searches'));
    app.use('/api/searches', require('./api/v1.0/searches'));
    //teste
    app.use('/api/v1.0/teste', require('./api/teste/v1.0'));
    
};