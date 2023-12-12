const db = require('../util/database');
const Reward = require('../models/reward');

exports.getReward = async (req, res) => {
    const result = await Reward.fetchAll();
    console.log('success to retrive data from reward', result[0]);
    res.status(200).json(result[0]);
};

exports.getNewReward = async (req, res) => {
    const result = await Reward.fetchNewRewardAll();
    res.status(200).json(result);
};

exports.postReward = async (req, res) => {
    console.log(req.body);
    Reward.update(req.body.userid, req.body.value);
    res.status(200).send('success to update reward');
};

exports.postNewReward = async (req, res) => {
    console.log(req.body);
    const post = new Reward({
        userid: req.body.userid,
        reward: req.body.reward,
        username: req.body.username,
        turbinName: req.body.turbinName,
        totalReward: req.body.totalReward,
    });
    post.save()
        .then((result) => {
            console.log('created new reward!');
        })
        .catch((err) => console.log(err));
    res.status(200).send('success to update reward');
};

exports.postQrCode = async (req, res) => {
    const result = await Reward.enableQrCode(req.body.qrStatus);
    res.status(200).send('qr enabled');
};

exports.getQrCode = async (req, res) => {
    const result = await Reward.getQrStatus();
    res.status(200).json(result[0]);
};
