const sensorService = require('../services/sensorService');

const readSensor = async (req, res) => {
    try {
        const nilai_kelembapan = await sensorService.readHumidity(1);
        res.status(200).json({
            success: true,
            message: 'data kelembapan tanah terbaru',
            data: nilai_kelembapan
        });
        console.log('Sensor data saved/updated successfully', nilai_kelembapan);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const updateSensor = async (req, res) => {
    try {
        const kelembapan = parseInt(req.body.kelembapan);
        const newKelembapan = await sensorService.updateHumidity(1, kelembapan);
        if(newKelembapan){
            res.status(200).json({
                success:true,
                message: "data sensor berhasil di update",
                data: kelembapan,
            });
        }
    } catch (error) {
        console.error('Error saving/updating sensor data:', error);
    }
}

module.exports = {
    readSensor,
    updateSensor
}
