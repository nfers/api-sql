const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');
const Exercises = require('../models/Exercises');
const Address = require('../models/Address');


const connection = new Sequelize(dbConfig);

User.init(connection);
Exercises.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;