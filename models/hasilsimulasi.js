'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HasilSimulasi extends Model {
    static associate(models) {
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
    pupuk_urea: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pupuk_npk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volume_air: {
      type: DataTypes.INTEGER
    },
    jenis_bibit_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Jenis_Bibits',
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
