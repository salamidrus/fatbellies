'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BranchBuffetPlots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branch_id: {
        type: Sequelize.INTEGER
      },
      buffet_id: {
        type: Sequelize.INTEGER
      },
      max_capacity: {
        type: Sequelize.INTEGER
      },
      booked_slot: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      day: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.INTEGER
      },
      end_time: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BranchBuffetPlots');
  }
};