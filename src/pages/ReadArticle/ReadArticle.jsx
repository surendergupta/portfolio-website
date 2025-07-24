import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from '../../Components/Footer/Footer';

import INFO from "../../data/info";
import SEO from "../../data/seo";
import myArticles from "../../data/articles";

import './ReadArticle.css'

const ReadArticle = () => {
  const { id } = useParams();
  const index = parseInt(id, 10) - 1;
  if (isNaN(index) || index < 0 || index >= myArticles.length) {
    return <div>Article not found</div>;
  }
  const article = myArticles[index]();
  
  const currentSEO = SEO.find((item) => item.page === "home");
  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
            name="keywords"
            content={currentSEO.keywords.join(", ")}
        />
      </Helmet>
      <div className="page-content">
        <NavBar currentPage="articles" logoUrl={INFO.main.logo} />
        <div className="content-wrapper">
          <div className='read-article-container'>
            <div className="read-article-back">
              <Link to="/articles">
                <img src="/back-button.png" alt="back" className="read-article-back-button" />
              </Link>
            </div>
            <div className='read-article-wrapper'>
              <div className='read-article-date'>{article.date}</div>
              <div className='title read-article-title'>{article.title}</div>
              <div className='read-article-content'>
                {article.description}
                {article.body }
              </div>              
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadArticle
