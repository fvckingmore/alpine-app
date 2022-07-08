var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController.js');

/* GET users listing. */
router.get('/', usuarioController.index);

module.exports = router;
