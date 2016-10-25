var tmp = require('tmp');
var fs = require('fs');

var Service = function(req, res){

var path = './tmp';
var fd = './uploads/simpleCaptcha.png';

tmp.file(function (err, path, fd, cleanupCallback) {
    if (err) throw err;

    console.log("File: ", path);
    console.log("Filedescriptor: ", fd);
    fs.writeFileSync(path, "Hello world!")
});

res.status(500).json({error: path})

}

module.exports = Service;