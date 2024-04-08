'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hasil_Simulasis', {
      id_hasil_simulasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      luas_lahan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kuantitas_pupuk: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      debit_air: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jumlah_bibit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jenis_pupuk_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Jenis_Pupuks',
          key: 'id_jenis_pupuk'
        }
      },
      jenis_bibit_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Jenis_Bibits',
          key: 'id_jenis_bibit'
        }
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
    await queryInterface.dropTable('Hasil_Simulasis');
  }
};