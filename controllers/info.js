const db = require('../util/database');
const Info = require('../models/info');

exports.getTurBinInfo = async (req, res) => {
    const result = await Info.fetchAll();
    console.log('success to retrive data from info');
    res.status(200).json(result);
};

exports.postTurBinInfo = async (req, res) => {
    Info.update(req.body.id, req.body.type, req.body.value);
    res.status(200).send('success to update info');
};

exports.postSaveInfo = async (req, res) => {
    const post = new Info(req.body);
    post.save();
    res.status(200).send('success to save Info');
};
