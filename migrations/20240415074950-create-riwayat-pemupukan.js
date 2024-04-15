'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Riwayat_Pemupukans', {
      id_riwayat_pemupukan: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      waktu_pemupukan: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jadwal_pemupukan_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Jadwal_Pemupukans',
          key: 'id_jadwal_pemupukan'
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
    await queryInterface.dropTable('Riwayat_Pemupukans');
  }
};