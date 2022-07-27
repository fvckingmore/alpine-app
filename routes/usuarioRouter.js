var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController.js');

/* GET users listing. */
router.get('/', usuarioController.index);
router.get('/get', usuarioController.get);
router.post('/destroy', usuarioController.destroy);
router.post('/create', usuarioController.create);
router.post('/update', usuarioController.update);

module.exports = router;
