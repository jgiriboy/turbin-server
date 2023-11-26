const getDb = require('../util/database').getDb;
const dateFormat = require('../util/dateFormat');

module.exports = class TurBinInfo {
    constructor(body) {
        this.id = body.id;
        this.title = body.title;
        this.latitude = body.latitude;
        this.longitude = body.longitude;
        this.h_general = body.h_general;
        this.h_plastic = body.h_plastic;
        this.h_can = body.h_can;
        this.h_glass = body.h_glass;
        this.saved_budget = body.saved_budget;
        this.last_updated = dateFormat(new Date());
    }

    save() {
        const db = getDb();
        return db
            .collection('info')
            .insertOne(this)
            .then((result) => console.log(result))
            .catch((err) => {
                console.log(err);
            });
    }

    static update(id, type, value) {
        const db = getDb();
        return db
            .collection('info')
            .updateOne(
                { id: id },
                {
                    $inc: { [type]: value },
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
            .collection('info')
            .find()
            .toArray()
            .then((info) => {
                console.log(info);
                return info;
            })
            .catch((err) => console.log(err));
    }
};
