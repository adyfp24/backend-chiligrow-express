const simulasiService = require('../services/simulasiService');

const createSimulasi = (req, res) => {
    const data = req.body;
    res.status(200).json({ success: true, data: data });
}

const getAllSimulasi = () => {

}

const getSimulasiById = () => {

}  

module.exports = {
    createSimulasi,
    getAllSimulasi,
    getSimulasiById
}