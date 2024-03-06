'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pengepuls', {
      id_pengepul: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      nama_pengepul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lokasi_pengepul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kontak_pengepul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jenis_cabai_diterima: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kapasitas_pengepulan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      penawaran_harga: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pengepuls');
  }
};