import React from 'react';
import './whatGPT3.css';
import img1 from './gallery_images/img54.jpg';
import img2 from './CERT1.jpg';
import img3 from './CERT2.jpg';
import { Link } from 'react-router-dom';

function WhatGPT3() {
  return (
    <div id="gallery">
      <div className="img">
        <img src={img1} alt="" />
      </div>
      <div className="img2">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="textbelow">
        <div style={{ textAlign: 'center' }}>Appreciation letter from Swinburne <br /> University Australia</div>
        <div>Association with GK mawana films</div>
      </div>
      <div className="buttons">
        <div><Link to='/alumni'><button className='buttons-btn' id="list" style={{ marginLeft: '38px' }} >Alumni List</button></Link></div>
        <div><button className='buttons-btn' id="reviews" style={{ marginLeft: '38px' }} onClick={() => window.open('https://www.google.com/search?q=placing+dreams&sxsrf=ALiCzsbrTJEdus6Av5BtQv4zPLkb-xriIQ%3A1663228068015&ei=pNgiY_1L5o-vvA-iy5qQDQ&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYATIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ0oECEEYAEoECEYYAFAAWABgwg5oAXABeACAAQCIAQCSAQCYAQCgAQGwAQrAAQE&sclient=gws-wiz#')}>Google Reviews</button></div>
      </div>
    </div>
  );
}

export default WhatGPT3;
