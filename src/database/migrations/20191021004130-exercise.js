'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exercises', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      limbs: {
        type: Sequelize.ENUM('I', 'S', 'U'),
        defaultValue: 'U',
      },
      created_at: {      
        type: Sequelize.DATE(6),
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
          type: Sequelize.DATE(6),
          allowNull: false,
          defaultValue: Sequelize.NOW
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exercises');
  }
};
