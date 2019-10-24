const express = require('express');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');
const ExercisesController = require('../controllers/ExercisesController');
const ReportController = require('../controllers/ReportController');
const BodyDataController = require('../controllers/BodyDataController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/exercises', ExercisesController.index);
routes.post('/exercises', ExercisesController.store);
routes.get('/exercises/:id', ExercisesController.findOne);
routes.put('/exercises/:id', ExercisesController.update);

routes.get('/users/:user_id/bodydata', BodyDataController.index);
routes.post('/users/:user_id/bodydata', BodyDataController.store);


routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/reports', ReportController.show);

module.exports = routes;

//verificar o uso do consign ou require-directory