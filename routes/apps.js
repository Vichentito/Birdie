'use strict'

var express = require('express');
var Apps = require('../controllers/apps');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/apks' });

api.get('/probando-controlador-apks', Apps.pruebas);
api.get('/get-apk-file/:apkFile', Apps.getImageFile);

module.exports = api;
