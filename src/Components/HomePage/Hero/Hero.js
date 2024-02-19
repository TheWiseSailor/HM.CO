// HomePage.js
import React from 'react';
import Holly from './HeroImages/Holly.png'
import './Hero.css';

const HomePage = () => {
  return (
    <div>

      <div className='HomePagePrimary'>
      <div className='LeftBackground'></div>
        <h1 className='Hero1'>Welcome to my Homepage</h1>
        <p className='P1'>This is the content of the homepage.</p>
        <img src={Holly} alt="Holly" className="Holly1" />
      </div>
    </div>
  );
}

export default HomePage;