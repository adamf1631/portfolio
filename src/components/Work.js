import React, { useState, useEffect } from 'react';
import { Animate } from "react-simple-animate";
import ExRe from './assets/expiration-reminder-thumbnail.png';
import appImg from './assets/app-img.jpg';
import adamDesign from './assets/adam-design.png';


const Work = () => {

  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(play => !play)
  }, [])
    return (
            <>
            <div id='work-section' className='skills'>
            <h5>
                Work:
            </h5>
            </div>
          <div className='work mb-4'>
          <div className='row'>
          <div className='col'>
          <Animate
          play={play}
          duration={2}
          delay={1}
          start={{
            opacity:0
          }}
          end={{ opacity:1 }}
        >
            <div className="card">
  <img src={ExRe} className="card-img-top" alt="Expiration Reminder" />
  <div className="card-body">
    <h5 className="card-title">Expiration Reminer</h5>
    <p className="card-text">A CRUD web app to track and store contracts utilizing php 7 and a MariaDB with html and css front end</p>
    <a rel="noreferrer" href="http://expiration.camdendiocese.org" target="_blank" className="btn btn-success">Live</a>
    <a rel="noreferrer" href="http://njprovincial.org/exp_demo/" target="_blank" className="btn btn-success m-1">Demo</a>
    <a rel="noreferrer" href="https://github.com/adamf1631/Expiration-Reminder-Tracker-App" target="_blank" className="btn btn-success m-1">Code</a>
  </div>
  </div>
  </Animate>
          </div>

          <div className='col'>
          <Animate
          play={play}
          duration={2}
          delay={2}
          start={{
            opacity:0
          }}
          end={{ opacity:1 }}
        >

  <div className="card">
  <img src={appImg} className="card-img-top" alt="React Native App" />
  <div className="card-body">
    <h5 className="card-title">Article Mobile App</h5>
    <p className="card-text">A IOS and Android app built with Expo and React Native and Firebase storage for notifications</p>
    <a rel="noreferrer" href="https://expo.io/@afalchetta/projects/CamdenDioceseApp" target="_blank" className="btn btn-success">Live</a>
    <a rel="noreferrer" href="https://github.com/adamf1631/doc-article-app" target="_blank" className="btn btn-success m-1">Code</a>
  </div>
</div>
</Animate>
          </div>


          <div className='col'>
          <Animate
          play={play}
          duration={2}
          delay={3}
          start={{
            opacity:0
          }}
          end={{ opacity:1 }}
        >
<div className="card">
  <img src={adamDesign} className="card-img-top" alt="React Native App" />
  <div className="card-body">
    <h5 className="card-title">Boilerplate Website</h5>
    <p className="card-text">I sell boilerplates for MERN stack CRUD apps; including: back end, front end and state managment(redux js)</p>
    <a href="https://adamdesign.digital" rel="noreferrer" target="_blank" className="btn btn-success">Live</a>
  </div>
</div>
</Animate>
          </div>
          </div>
          </div>
        
            </>
    )
}

export default Work

