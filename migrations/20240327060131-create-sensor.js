'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sensors', {
      id_sensor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nilai_kelembapan: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Users',
          key: 'id_user'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sensors');
  }
};