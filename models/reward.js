const getDb = require('../util/database').getDb;
const dateFormat = require('../util/dateFormat');

module.exports = class Reward {
    constructor({ userid = '', reward = '', username = '' } = {}) {
        this.userid = userid;
        this.reward = reward;
        this.username = username;
    }

    save() {
        const db = getDb();
        return db
            .collection('reward')
            .insertOne(this)
            .then((result) => console.log(result))
            .catch((err) => {
                console.log(err);
            });
    }

    static update(userid, value) {
        const db = getDb();
        return db
            .collection('reward')
            .updateOne(
                { userid: userid },
                {
                    $inc: { reward: value },
                    $set: { last_updated: dateFormat(new Date()) },
                }
            )
            .then((result) => console.log(result))
            .catch((err) => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('reward')
            .find()
            .toArray()
            .then((reward) => {
                console.log(reward);
                return reward;
            })
            .catch((err) => console.log(err));
    }
};
