const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Api: 'In Development'});
})

module.exports = routes;
