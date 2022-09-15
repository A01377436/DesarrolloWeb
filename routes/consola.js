const express = require('express');
const router = express.Router();
const consolaController=require('../controllers/consola')

//Create, Read, Update, Delete (CRUD) ABCC

//Servicio para mostrar formulario
router.get('/altaConsola',consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola);
//Servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);

module.exports = router;