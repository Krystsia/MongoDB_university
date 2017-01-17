const movieModel = require('../models/movies.js');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const action = require('../services/db_service.js');

module.exports = (req, res, next) => {
  MongoClient.connect(config.get('mongoClient:uri'), (error, db) => {
    action.insertDocument(movieModel(req.body), db, () => {
      db.close(() => {
        res.redirect('/');
      });
    })
  })
}
