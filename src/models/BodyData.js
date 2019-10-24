const { Model, DataTypes } = require('sequelize');

class BodyData extends Model {
    static init(sequelize) {
        super.init({
            weight: DataTypes.REAL,
            height: DataTypes.REAL,
            evaluation_date: DataTypes.DATE,
        },
        {
            sequelize
        })
    };

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
}

module.exports = BodyData;