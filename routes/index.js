var express = require('express');
var router = express.Router();
var os = require('os');

router.get('/status', (req, res, next) => {
    const statusInfo = {
        serverTime: new Date().toISOString(),
        platform: os.platform(),
        architecture: os.arch()
    };
    res.status(200).json(statusInfo);
});

module.exports = router;