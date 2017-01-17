const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

const action = {};

exports.insertDocument = (data, db, callback) => {
  let collection = db.collection('movies');

  collection.insertOne(data, (err, result) => {
    callback(result)
  })
}

exports.getAllMovies = (db, callback) => {
  let collection = db.collection('movies');

  collection.find({}).toArray((err, result) => {
    callback(result)
  })
}
