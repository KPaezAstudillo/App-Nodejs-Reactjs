'use strict'

var express = require('express');
var Article = require('../controllers/article');

//express router object:
var router = express.Router();

//Routes for articles:

router.post('/save', Article.save);

router.get('/articles', Article.getArticles);

router.delete('/delete/:id', Article.delete);

module.exports = router;