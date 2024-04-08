'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jenis_Pupuks', {
      id_jenis_pupuk: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      jenis_pupuk: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('JenisPupuks');
  }
};