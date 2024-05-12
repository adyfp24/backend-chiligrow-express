const JadwalPemupukan = require('../models').JadwalPemupukan;
const RiwayatPemupukan = require('../models/').RiwayatPemupupukan;
const schedule = require('node-schedule');

const cJadwalService = async (dataJadwal) => {
    try {
        const newJadwal = await JadwalPemupukan.create(dataJadwal);
        return newJadwal;
    } catch (error) {
        throw new Error('Failed to create new jadwal pemupukan');
    }
}

const scheduleTask = (selangHari, selangJam, user_id) => {
    try {
        const rule = new schedule.RecurrenceRule();
        
        const [hour, minute, second] = selangJam.split(':').map(Number);

        rule.hour = hour;
        rule.minute = minute; 
        rule.second = second || 0; 

        rule.dayOfWeek = null; 
        rule.interval = selangHari; 

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (currentHour > hour || (currentHour === hour && currentMinute > minute)) {
            now.setDate(now.getDate() + 1);
        }

        const firstSchedule = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            hour,
            minute,
            second || 0
        );

        schedule.scheduleJob(firstSchedule, () => {
            console.log('Penjadwalan berhasil sesuai waktu yang ditentukan');
        });
    } catch (error) {
        console.error('Failed to schedule task:', error);
        throw new Error('Failed to scheduling task');
    }
};


const rJadwalService = async (user_id) => {
    try {
        const dataJadwal = await JadwalPemupukan.findOne({
            where: {user_id: user_id},
            order: [['createdAt', 'DESC']]
        })
        return dataJadwal;
    } catch (error) {
        console.error('Failed to schedule task:', error);
        throw new Error('Failed to scheduling task');
    }
}

const rAllJadwalService = async (user_id) => {
    try {
        const allDataJadwal = await JadwalPemupukan.findAll({
            where: {user_id: user_id},
            order: [['createdAt', 'DESC']]
        })
        return allDataJadwal;
    } catch (error) {
        console.error('Failed to schedule task:', error);
        throw new Error('Failed to scheduling task');
    }
}

const uJadwalService = async (id_jadwal, dataJadwal) => {
    try {
        const updatedJadwal = await JadwalPemupukan.update(
            dataJadwal,
            {where: {id_jadwal_pemupukan: id_jadwal}}
        );
        return updatedJadwal;
    } catch (error) {
        throw new Error('Failed to update new jadwal pemupukan');
    }
}

const rAllHistroy = async () => {

}

module.exports = {
    cJadwalService,
    rJadwalService,
    rAllJadwalService,
    uJadwalService,
    scheduleTask,
    rAllHistroy
}
