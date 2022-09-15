const express = require('express');
const router = express.Router();
const palindromoController=require('../controllers/palindromo')

//Create, Read, Update, Delete (CRUD) ABCC

//Servicio para mostrar formulario
router.get('/palindromo',palindromoController.getpalindromo);
//Servicio para procesar los datos del formulario
router.post('/palindromo',palindromoController.postpalindromo);

module.exports = router;