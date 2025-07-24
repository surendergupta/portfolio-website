import React from 'react'
import { Helmet } from 'react-helmet-async';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from '../../Components/Footer/Footer';

import INFO from "../../data/info";
import SEO from "../../data/seo";
import myArticles from "../../data/articles";

import './Articles.css'

const Articles = () => {

  const currentSEO = SEO.find((item) => item.page === "articles");

  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar currentPage="articles" logoUrl={INFO.main.logo} />
        <div className="content-wrapper">
          <div className='articles-container'>
            <div className='title'>{INFO.articles.title}</div>
            <div className='subtitle'>{INFO.articles.description}</div>
            <div className='articles-list'>
              <div className='articles-wrapper'>
                {myArticles.map((article, index) => (
                <div className='articles-article' key={(index + 1).toString()}>
                  <div className='article'>
                    <div className="article-left-side">
                      <div className="article-date">{article().date}</div>
                    </div>
                    <a href={"/article/" + (index + 1)}>
                      <div className="article-right-side">
                        <div className="article-title">{article().title}</div>
                        <div className="article-description">{article().description}</div>
                        <div className="article-link">Read Article <FontAwesomeIcon icon={faRightLong} /></div>
                      </div>
                    </a>
                  </div>
                </div>
                ))}
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


export default Articles;
