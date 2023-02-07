import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "../Global";

const New = () => {
    const url = Global.url;

    const [article, setArticle] = useState({
        title: null,
        content: null,
        author: null
    });

    const [redirect, setRedirect] = useState(false);

    //References for article data
    let titleRef = React.createRef();
    let contentRef = React.createRef();
    let authorRef = React.createRef();

    const changeState = () => {
        setArticle({
            title: titleRef.current.value,
            content: contentRef.current.value,
            author: authorRef.current.value

        });
        console.log(article);
    }

    const sendData = (e) =>{
        //prevents reloading screen:
        e.preventDefault();
        changeState();
        //post request to save article:
        axios.post(url + 'save', article).then(res => {
            setRedirect(true);
            console.log(res.data);
        })
    }

    if(redirect){
        return <Navigate to ='articles' />
    }


    return (
        <div className="row new-entry">
            <div id="form" className="card mx-auto mb-3 mt-5 col-lg-3 col-md-5" >
                <div className="card-header text-dark">
                    <h4>Publish new article</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label>Title</label>
                            <input type="text" className="form-control" id="title" name="title" ref={titleRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Content</label>
                            <textarea className="form-control" id="content" name="content" rows="6" cols="30" ref={contentRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Author</label>
                            <input type="text" className="form-control" id="author" name="author" ref={authorRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">

                            <input type="submit" className="form-control btn btn-primary" id="publish" value="Publish" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default New;