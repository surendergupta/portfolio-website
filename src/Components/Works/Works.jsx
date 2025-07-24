import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card/Card'

import './Works.css' // Assuming you have a CSS file for styling

const Works = () => {
  return (
    <div>
      <div className="works">
        <Card
          icon={faBriefcase}
          title="Work"
          body={
            <div className="works-body">
              <div className="work">
                <img
                  src="/facebook.png"
                  alt="facebook"
                  className="work-image"
                />
                <div className="work-title">NSSOFTECH</div>
                <div className="work-subtitle">
                  Software Engineer
                </div>
                <div className="work-duration">2016 - 2023</div>
              </div>

              <div className="work">
                <img
                  src="/twitter.png"
                  alt="twitter"
                  className="work-image"
                />
                <div className="work-title">Webpix Solution</div>
                <div className="work-subtitle">
                  Software Engineer
                </div>
                <div className="work-duration">2014 - 2015</div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Works
