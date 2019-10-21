'use strict'

const { Model, DataTypes } = require('sequelize');

class Exercises extends Model { }
    Exercises.init({
        description: DataTypes.STRING        
    },
    {
      sequelize
    });
 
module.exports = Exercises;

