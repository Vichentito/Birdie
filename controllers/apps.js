'use strict'
var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwtUser');


function pruebas(req, res){
	res.status(200).send({
		message: 'Probando controlador de usuarios apps'
	});
}

function getApkFile(req, res){
	console.log("josefo se la come")
	var apkFile = req.params.apkFile;
	var path_file = './uploads/apks/'+apkFile;
	fs.exists(path_file, function(exists){
		if(exists){
			//res.sendFile(path.resolve(path_file));
			res.download(path_file, apkFile); 
		}else{
			res.status(200).send({message: 'No existe la apk...'});
		}
	});
}



module.exports = {
	pruebas,
	getApkFile
};
