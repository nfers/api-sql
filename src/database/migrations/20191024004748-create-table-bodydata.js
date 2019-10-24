'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('body_data', 
      { id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      weight: {
        type: Sequelize.REAL(11, 12),
        allowNull: false,
      },
      height: {
        type: Sequelize.REAL(11, 12),
        allowNull: false,
      },
      evaluation_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('body_data');
  }
};
