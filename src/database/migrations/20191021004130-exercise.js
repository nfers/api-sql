'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('exercises', { 
        id_exercise: { 
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
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exercises');
  }
};
