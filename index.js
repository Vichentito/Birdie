'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8081;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds129560.mlab.com:29560/birdie',{useMongoClient: true}).then(()=>{
		console.log("La conexión a la base de datos está funcionando correctamente...");
		app.listen(port, function(){
			console.log("Servidor del api en http://localhost:"+port);
		});
	}).catch(err => console.log(err));