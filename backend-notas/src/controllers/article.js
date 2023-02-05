'use strict'

var Article = require('../models/article');

//Object to use all methods

var controller = {

    //Method to save article
    save: (req, res) => {
        var params = req.body;

        var article = new Article();

        article.title = params.title;
        article.content = params.content;
        article.author = params.author;

        article.save((err, articleStored) => {

            if (err || !articleStored) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Article has not been saved'
                })
            }

            return res.status(200).send({
                status: 'success',
                articleStored
            });
        });
    },

    //Method to show the list of articles

    getArticles: (req, res) => {
        var query = Article.find({});

        query.sort('-date').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error fetching data'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No articles to show'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });

    },

    //Method to delete an article

    delete: (req, res) => {
        //get id from url
        var articleId = req.params.id;

        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error deleting article'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Article not found'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        });
    }
}

module.exports = controller;