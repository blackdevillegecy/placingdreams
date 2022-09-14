import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import gpt3Logo from '../../components/navbar/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="footer">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Placing Dreams, Because Every Dream Matters</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Bunglow No. 2, 1st Floor, Devgans, 4 Bunglow,Andheri west, Mumbai <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <div className="linkers">
          <p><WhatsAppIcon className="WhatsAppIcon" onClick={() => window.open('https://wa.me/919987851716')} style={{ fontSize: 50, alignContent: 'center', display: 'flex', marginRight: 25 }} /></p>
          <p><InstagramIcon className="InstagramIcon" onClick={() => window.open('https://instagram.com/placingdreams?igshid=YmMyMTA2M2Y=')} style={{ fontSize: 50 }} /></p>
          <h3 className="mobile"> Mobile 9987851716 </h3>
        </div>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Placing Dreams. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
