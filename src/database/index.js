const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');
const Exercises = require('../models/Exercises');


const connection = new Sequelize(dbConfig);

User.init(connection);
Exercises.init(connection);

module.exports = connection;