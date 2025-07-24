import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

import { faGithub, faInstagram, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../../Components/NavBar/NavBar";
import AllProjects from "../../Components/AllProjects/AllProjects";
import Article from "../../Components/Article/Article";
import Works from "../../Components/Works/Works";
import Footer from "../../Components/Footer/Footer";

import INFO from "../../data/info";
import SEO from "../../data/seo";
import myArticles from "../../data/articles";

import './Home.css'
const Home = () => {
    const currentSEO = SEO.find((item) => item.page === "home");
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
                <NavBar currentPage="home" logoUrl={INFO.main.logo} />
                <div className="content-wrapper">
                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src="homepage.jpg"
                                            alt="about"
                                            className="homepage-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-socials">
                            {/* Social media links can be added here */}
                            <a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
                        </div>

                        <div className="homepage-projects">
							<AllProjects projectlists={INFO.projectlists} />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default Home;
