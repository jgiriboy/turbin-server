const db = require('../util/database');
const Reward = require('../models/reward');

exports.getReward = async (req, res) => {
    const result = await Reward.fetchAll();
    console.log('success to retrive data from reward');
    res.status(200).json(result[0]);
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
    });
    post.save()
        .then((result) => {
            console.log('created new reward!');
        })
        .catch((err) => console.log(err));
    res.status(200).send('success to update reward');
};
