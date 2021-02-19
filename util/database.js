const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
    MongoClient
    .connect('mongodb+srv://fabriciobaeza:projectmyhem75@cluster0.n4hv1.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No databases found!'
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
