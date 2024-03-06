const express = require('express');
const router = express.Router();

router.get('/pengepul', (req, res) => {
    res.status(200).json({
        'data': 'don testing endpoint pengepul'
    })
});

module.exports = router;

