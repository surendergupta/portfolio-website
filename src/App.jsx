// import { useState, useEffect  } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'

// For Google Analytics
// import ReactGA from "react-ga4";
// import { TRACKING_ID } from "./data/tracking";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Articles from "./pages/Articles/Articles";
import ReadArticle from "./pages/ReadArticle/ReadArticle";
import Contact from "./pages/Contact/Contact";
import Notfound from "./pages/NotFound/NotFound";

function App() {
	// Initialize Google Analytics
	// useEffect(() => {
    //     if (TRACKING_ID !== "") {
    //         ReactGA.initialize(TRACKING_ID);
    //     }
    // }, []);
  return (
    <>
      <div className='App'>		
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ReadArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  )
}

export default App