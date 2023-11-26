const express = require('express');

const db = require('../util/database');
const infoController = require('../controllers/info');

const router = express.Router();

router.get('/info', infoController.getTurBinInfo);

router.post('/info', infoController.postTurBinInfo);
router.post('/new-info', infoController.postSaveInfo);

module.exports = router;
