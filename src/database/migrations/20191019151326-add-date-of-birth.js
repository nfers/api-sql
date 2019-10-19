'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'birth',      
      {
        type: Sequelize.DATE(6),       
        unique: true,
      },
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'users',
        'birth',      
        {
          type: Sequelize.DATE(6),
          unique: true,
        },
      );
    },
};
