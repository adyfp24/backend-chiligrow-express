const JadwalPemupukan = require('../models').JadwalPemupukan;
const RiwayatPemupukan = require('../models/').RiwayatPemupukan;
const schedule = require('node-schedule');

const cJadwalService = async (dataJadwal) => {
    try {
        const newJadwal = await JadwalPemupukan.create(dataJadwal);
        return newJadwal;
    } catch (error) {
        throw new Error('Failed to create new jadwal pemupukan');
    }
}

const cHistoryService = async (jadwal_pemupukan_id) => {
    try {
        const waktu_pemupukan = new Date();
        const data = { waktu_pemupukan, jadwal_pemupukan_id };
        const newHistory = await RiwayatPemupukan.create(data);
        return newHistory;
    } catch (error) {
        throw new Error('Failed to create new history pemupukan' + error);
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
            pumpOn(5, user_id);
        });
    } catch (error) {
        console.error('Failed to schedule task:', error);
        throw new Error('Failed to scheduling task');
    }
};


const rJadwalService = async (user_id) => {
    try {
        const dataJadwal = await JadwalPemupukan.findOne({
            where: { user_id: user_id },
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
            where: { user_id: user_id },
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
            { where: { id_jadwal_pemupukan: id_jadwal } }
        );
        return updatedJadwal;
    } catch (error) {
        throw new Error('Failed to update new jadwal pemupukan');
    }
}

const dJadwalService = async (id_jadwal) => {
    try {
        const deletedJadwal = await JadwalPemupukan.destroy({
            where: { id_jadwal_pemupukan: id_jadwal }
        })
        return deletedJadwal;
    } catch (error) {
        throw new Error('Failed to delete jadwal pemupukan' + error)
    }
}

const rAllHistory = async (user_id) => {
    try {
        const allHistory = await RiwayatPemupukan.findAll({
            include: [{
                model: JadwalPemupukan,
                as: 'jadwal_pemupukan',
                where: { user_id: user_id },
                attributes: ['id_jadwal_pemupukan', 'selang_jam', 'selang_hari', 'user_id'],
            }]
        })
        return allHistory;
    } catch (error) {
        throw new Error('Failed to read all history pemupukan' + error)
    }
}

const pumpOn = async (id, user_id) => {
    try {
        const jadwalPupuk = await JadwalPemupukan.findOne({
            where: { user_id: id }
        })
        const updatedJadwal = await jadwalPupuk.update({
            status: true
        })
        const trueJadwalPupuk = await JadwalPemupukan.findOne({
            where: { user_id: user_id }
        })

        cHistoryService(trueJadwalPupuk.id_jadwal_pemupukan);
        setTimeout(async () => {
            try {
                await jadwalPupuk.update({
                    status: false
                });
                console.log('Status successfully reset to false after 5 seconds');
            } catch (error) {
                console.error('Failed to reset pump status to false:', error);
            }
        }, 10000);
        return updatedJadwal
    } catch (error) {
        throw new Error('failed to change pump status')
    }
}

const rPumpService = async (user_id) => {
    try {
        const jadwalPupuk = await JadwalPemupukan.findOne({
            where: { user_id: user_id }
        })
        return jadwalPupuk.status
    } catch (error) {
        throw new Error('Failed to read pump status' + error)
    }
}

module.exports = {
    cJadwalService,
    rJadwalService,
    rAllJadwalService,
    uJadwalService,
    dJadwalService,
    scheduleTask,
    rAllHistory,
    cHistoryService,
    pumpOn,
    rPumpService
}
