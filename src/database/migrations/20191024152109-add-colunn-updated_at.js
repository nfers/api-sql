'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'body_data',
      'updated_at',
      {
        type: Sequelize.DATE(6),
        allowNull: true,
        defaultValue: Sequelize.NOW
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColunn(
      'body_data',
      'updated_at',
    );
  },
};
