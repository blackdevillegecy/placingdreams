import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import neon3 from './neon3.png';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">The Best Film School In India</h1>
      <p>Working in the film industry is considered to be one of the most tempting and glamorous careers of the 21st century, but is the way to the zenith really going to be a cakewalk? Definitely not. With the success rate less than most of the other career paths, it is really a difficult task to get into this profession, but everything is possible for a dreamer</p>

      <div className="gpt3__header-content__input">
        <Link to="/gallery1"><button type="button">Take a Look at our gallery</button></Link>
      </div>

      <div className="gpt3__header-content__people">
        <p>More than 100 success stories says it all</p>
      </div>
    </div>
    <div>
      <img src={neon3} alt="" width="500" height="500" id="neon" />
    </div>
  </div>
);

export default Header;
