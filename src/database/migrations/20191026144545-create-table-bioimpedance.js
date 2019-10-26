'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'bioimpedance',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        fatmass: {
          type: Sequelize.REAL(8, 2),
          allowNull: false,
        },
        leanmass: {
          type: Sequelize.REAL(8, 2),
          allowNull: false,
        },
        visceralfat: {
          type: Sequelize.REAL(8, 2),
          allowNull: false,
        },
        basalmeta: {
          type: Sequelize.REAL(8, 2),
          allowNull: false,
        },
        imc: {
          type: Sequelize.STRING,
          allowNull: false,    
        }
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bioimpedance');
  }
};
