const express = require('express');
const require_tree = require('require-tree')
const controllers = require_tree('../controllers')
const router = express.Router();

/* GET home page. */
console.log(controllers);

router.route('/')
  .get(controllers.main);

router.route('/addMovie')
  .post(controllers.addMovie);

module.exports = router;
