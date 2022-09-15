const express = require('express');
const router = express.Router();
const idiomafController=require('../controllers/idiomaf')

//Create, Read, Update, Delete (CRUD) ABCC

//Servicio para mostrar formulario
router.get('/IdiomaF',idiomafController.getIdiomaF);
//Servicio para procesar los datos del formulario
router.post('/IdiomaF',idiomafController.postIdiomaF);

module.exports = router;