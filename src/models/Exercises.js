const { Model, DataTypes } = require('sequelize');

class Exercises extends Model{ 
    static init(sequelize) {
        super.init({
        description: DataTypes.STRING,
        limbs: DataTypes.STRING,
    }, {
        sequelize
        })
    } 
};
 
module.exports = Exercises;
