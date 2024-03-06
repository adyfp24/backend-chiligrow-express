'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengepul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pengepul.init({
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
  }, {
    sequelize,
    modelName: 'Pengepul',
  });
  return Pengepul;
};