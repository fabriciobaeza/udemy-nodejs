const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = () => {
    MongoClient
    .connect('mongodb+srv://fabriciobaeza:projectmyhem75@cluster0.n4hv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        callback(client);
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = mongoConnect
