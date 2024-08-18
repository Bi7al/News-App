import React from 'react';
import VisitLink from '../VisitLink';
import "../main.css"
async function Politics() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=politics&pageSize=9&apiKey=3ec949dead2e452dab5d50fb92e79a54');
    const data = await response.json();
    const articles = data.articles;
    return (
        <>
            <div className="header">
                <h1>Politics</h1>
            </div>
            {articles.map((article, index) =>


                <div className="news-container" key={index} >
                    <h3 className="title" >{article.title}</h3>
                    <hr className='seperatorLine' />
                    <h5>Author: {article.author ? article.author : "Unknown"}</h5>
                    <h5>Published: {new Date(article.publishedAt).toDateString()}</h5>
                    <VisitLink url={article.url} />
                </div>

            )}


        </>


    )
}

export default Politics