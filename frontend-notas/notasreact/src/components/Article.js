import React from "react";

const Article = ({ id, articleData, delArticle }) => {

    const { title, date, content, author } = articleData;

    const formatDate = (date) => {
        return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4)
    }

    const del = () => {
        delArticle(id);
    }

    return (

        <div className="container col-12 col-lg-6">
            <div className="card mb-3">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="card-body">
                    <label className="card-text text-start">{content}</label>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-pub list-group-item">Published on: {formatDate(date)}</li>
                    <li className="list-pub list-group-item">Author: {author}</li>
                </ul>

            </div>
            <div className="card-footer">
                <button className="btn btn-danger btn-sm" onClick={del}>Delete</button>
            </div>
        </div>

    );
}

export default Article;