'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalPemupukan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JadwalPemupukan.init({
    id_jadwal_pemupukan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    selang_hari: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    selang_jam: {
      type: DataTypes.TIME,
      allowNull: false,
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
    modelName: 'JadwalPemupukan',
    tableName: 'Jadwal_Pemupukans'
  });
  return JadwalPemupukan;
};