module.exports = function (app) {
    app.use('/api/v1.0/searches', require('./api/v1.0/searches'));
    app.use('/api/searches', require('./api/v1.0/searches'));
    
};