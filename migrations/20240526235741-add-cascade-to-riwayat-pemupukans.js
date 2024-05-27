'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Riwayat_Pemupukans', 'Riwayat_Pemupukans_ibfk_1');
    
    await queryInterface.addConstraint('Riwayat_Pemupukans', {
      fields: ['jadwal_pemupukan_id'],
      type: 'foreign key',
      name: 'Riwayat_Pemupukans_ibfk_1', 
      references: {
        table: 'Jadwal_Pemupukans',
        field: 'id_jadwal_pemupukan',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Riwayat_Pemupukans', 'Riwayat_Pemupukans_ibfk_1');
    
  
    await queryInterface.addConstraint('Riwayat_Pemupukans', {
      fields: ['jadwal_pemupukan_id'],
      type: 'foreign key',
      name: 'Riwayat_Pemupukans_ibfk_1', 
      references: {
        table: 'Jadwal_Pemupukans',
        field: 'id_jadwal_pemupukan',
      },
    });
  }
};
