'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RiwayatPemupukan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RiwayatPemupukan.belongsTo(models.JadwalPemupukan, {
        foreignKey: 'jadwal_pemupukan_id',
        as: 'jadwal_pemupukan'
      });
    }
  }
  RiwayatPemupukan.init({
    id_riwayat_pemupukan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    waktu_pemupukan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jadwal_pemupukan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Jadwal_Pemupukans',
        key: 'id_jadwal_pemupukan'
      }
    }
  }, {
    sequelize,
    modelName: 'RiwayatPemupukan',
    tableName: 'Riwayat_Pemupukans'
  });
  return RiwayatPemupukan;
};