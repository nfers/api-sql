const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            birth: DataTypes.DATE,
        }, {
            sequelize
         })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        this.hasMany(models.BodyData, { foreignKey: 'user_id', as: 'body_data' });
    }

    //  static associate(models) {
        
    //  }
};




module.exports = User;