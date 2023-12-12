const express = require('express');

const db = require('../util/database');
const rewardController = require('../controllers/reward');

const router = express.Router();

router.get('/reward', rewardController.getReward);
router.get('/new-reward', rewardController.getNewReward);
router.get('/qrcode', rewardController.getQrCode);

router.post('/new-reward', rewardController.postNewReward);
router.post('/reward', rewardController.postReward);
router.post('/qrcode', rewardController.postQrCode);

module.exports = router;
