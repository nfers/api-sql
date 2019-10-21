const express = require('express');
const UserController = require('../controllers/UserController');
const ExercisesController = require('../controllers/ExercisesController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Api: 'In Development'});
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);


routes.get('/exercises', ExercisesController.index);
routes.post('/exercises', ExercisesController.store);

module.exports = routes;
