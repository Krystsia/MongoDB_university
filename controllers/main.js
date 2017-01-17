const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const action = require('../services/db_service.js');


module.exports = (req, res, next) => {
    MongoClient.connect(config.get('mongoClient:uri'), (error, db) => {
      action.getAllMovies(db, (result) => {
        res.render('index', { data: result });
      });

      db.close();
    })
}
