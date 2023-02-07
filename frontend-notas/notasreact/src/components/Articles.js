import React, { useState, useEffect } from "react";
import axios from 'axios';
import Global from "../Global";
import Article from "./Article";



const Articles = () => {

    const [articles, setArticles] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getArticles();
        console.log(articles);



    }, [articles.length]);

    //To get list of articles:
    const getArticles = () => {
        axios.get(url + 'articles').then(res => {
            setArticles(res.data.articles);
        })

    }

    //To delete an article:
    const deleteArticle = (id) => {
        const idArticle = articles[id]._id;
        axios.delete(url + 'delete/' + idArticle).then(res => {
            getArticles();
        })

    }

    return (
        <div className="publications">
            <h1 className="mt-5">Articles</h1>
            <div className="container mt-3">
                <div className="row col-12 col-lg-5">

                    {
                        articles.length > 0 ? (
                            articles.map((article, index) => {
                                return (

                                    <Article
                                        key={index}
                                        id={index}
                                        articleData={article}
                                        delArticle={deleteArticle}
                                    />

                                )
                            }

                            )) : (<h3>
                                No articles to show
                            </h3>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Articles;