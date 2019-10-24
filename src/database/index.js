const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');
const Exercises = require('../models/Exercises');
const Address = require('../models/Address');
const BodyData = require('../models/BodyData');


const connection = new Sequelize(dbConfig);

User.init(connection);
Exercises.init(connection);
Address.init(connection);
BodyData.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
BodyData.associate(connection.models);

module.exports = connection;