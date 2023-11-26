const express = require('express');

const db = require('../util/database');
const rewardController = require('../controllers/reward');

const router = express.Router();

router.get('/reward', rewardController.getReward);

router.post('/new-reward', rewardController.postNewReward);
router.post('/reward', rewardController.postReward);

module.exports = router;
