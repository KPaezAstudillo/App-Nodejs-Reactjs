'use strict'

var Article = require('../models/article');

//object to use all methods

var controller = {
//method to save article
save: (req, res) =>{
    var params = req.body;

    var article =new Article();

    article.title = params.title;
    article.content = params.content;
    article.author = params.author;

    article.save((err, articleStored) =>{

        if(err || !articleStored){
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


}