'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('address', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      //Relacionamento com a tabela Users
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'SN',
    },
      created_at: {
         type: Sequelize.DATE(6),
         allowNull: false,
         defaultValue: Sequelize.NOW
       },
      updated_at: {
        type: Sequelize.DATE(6),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('address');
  }
};
