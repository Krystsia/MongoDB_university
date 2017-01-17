const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const action = require('../services/db_service.js');


module.exports = (arg) => {
     const moviesModel = {
      "title": arg.title,
      "year": arg.year,
      "imbd": arg.imbd
    };

    return moviesModel
}
