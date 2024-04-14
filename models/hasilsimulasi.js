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
      HasilSimulasi.belongsTo(models.JenisPupuk, {
        foreignKey: 'jenis_pupuk_id',
        as: 'jenis_pupuk'
      });
      HasilSimulasi.belongsTo(models.JenisBibit, {
        foreignKey: 'jenis_bibit_id',
        as: 'jenis_bibit'
      });
      HasilSimulasi.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  HasilSimulasi.init({
    id_hasil_simulasi: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    luas_lahan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kuantitas_pupuk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    debit_air: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah_bibit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jenis_pupuk_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Jenis_pupuks',
        key: 'id_jenis_pupuk'
      }
    },
    jenis_bibit_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Jenis_bibits',
        key: 'id_jenis_bibit'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Users',
        key: 'id_user'
      }
    },
  }, {
    sequelize,
    modelName: 'HasilSimulasi',
    tableName: 'Hasil_Simulasis'
  });
  return HasilSimulasi;
};