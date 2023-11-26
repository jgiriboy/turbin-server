// const mysql = require('mysql2');

// // 커넥션 풀을 생성. 실행할 쿼리가 있을 때마다 활용할 수 있다.
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'turbin',
//     password: 'Herbac1262!',
// });

// module.exports = pool.promise();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://cow1262:deu901911@cluster0.gu41sbx.mongodb.net/turbin?retryWrites=true&w=majority'
    )
        .then((client) => {
            console.log('Connected to MongoDB!');
            _db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
