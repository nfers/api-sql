const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Api: 'In Development'});
})

routes.post('/users', UserController.store);

module.exports = routes;
