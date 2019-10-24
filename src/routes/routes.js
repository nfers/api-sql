const express = require('express');
const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');
const ExercisesController = require('../controllers/ExercisesController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/exercises', ExercisesController.index);
routes.post('/exercises', ExercisesController.store);
routes.get('/exercises/:id', ExercisesController.findOne);
routes.put('/exercises/:id', ExercisesController.update);

routes.post('/users/:user_id/addresses', AddressController.store);
//sconsole.log(routes.post);

module.exports = routes;

//verificar o uso do consign ou require-directory