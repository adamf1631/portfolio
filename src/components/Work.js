import React from 'react';
import ExRe from './assets/expiration-reminder-thumbnail.png';
import appImg from './assets/app-img.jpg';
import adamDesign from './assets/adam-design.png';


const Work = () => {
    return (
            <>
            <div className='skills'>
            <h5>
                Work:
            </h5>
            </div>
            <div className='work mb-4'>
            
            <div className="card">
  <img src={ExRe} className="card-img-top" alt="Expiration Reminder" />
  <div className="card-body">
    <h5 className="card-title">Expiration Reminer</h5>
    <p className="card-text">A CRUD web app to track and store contracts utilizing php 7 and a MariaDB with html and css front end</p>
    <a href="#" target="_blank" class="btn btn-success">Live</a>
    <a href="#" target="_blank" class="btn btn-success m-1">Demo</a>
    <a href="#" target="_blank" class="btn btn-success m-1">Code</a>
  </div>
  </div>

  <div className="card">
  <img src={appImg} className="card-img-top" alt="React Native App" />
  <div className="card-body">
    <h5 className="card-title">Article Mobile App</h5>
    <p className="card-text">A IOS and Android app built with Expo and React Native and Firebase storage for notifications</p>
    <a href="#" target="_blank" class="btn btn-success">Live</a>
    <a href="#" target="_blank" class="btn btn-success m-1">Code</a>
  </div>
</div>

<div className="card">
  <img src={adamDesign} className="card-img-top" alt="React Native App" />
  <div className="card-body">
    <h5 className="card-title">Boilerplate Website</h5>
    <p className="card-text">I sell boilerplates for MERN stack CRUD apps</p>
    <a href="https://adamdesign.digital" target="_blank" class="btn btn-success">Live</a>
  </div>
</div>
        </div>
            </>
    )
}

export default Work

