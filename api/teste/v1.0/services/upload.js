var fs = require('fs');

var Service = function(req, res){
	//res.setHeader("Access-Control-Allow-Origin", "*");
	console.log(req.files);
	var arquivo = req.files.file;
	var temporario = req.files.file.path;
	var novo = './uploads/' + req.files.file.name;

	fs.mkdir('./uploads/image_upload_path_new', function (err) {
        if (err) {
          console.log('Err: ', err);
          res.end('Deu error na hora de criar o diretório!');
        }

    });
	
 	fs.rename(temporario, novo, function(err){
 		if(err){
 			res.status(500).json({error: err})
 		}
 		res.json({message: "enviado com sucesso.", file: novo});
 	})
}

module.exports = Service;