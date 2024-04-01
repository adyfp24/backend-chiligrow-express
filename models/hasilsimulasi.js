'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HasilSimulasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HasilSimulasi.init({
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
        model:'Jenis_pupuks',
        key: 'id_jenis_pupuk'
      }
    },
    jenis_bibit_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references:{
        model:'Jenis_bibits',
        key: 'id_jenis_bibit'
      }
    },
  }, {
    sequelize,
    modelName: 'HasilSimulasi',
  });
  return HasilSimulasi;
};