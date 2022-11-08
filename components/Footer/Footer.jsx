import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from "./Footer.module.css";
import Image from 'next/image';

function Footer() {
  return (
  <div className={[styles.gpt3__footer, styles.section__padding].join(" ")} id="footer">
    <div className={styles.gpt3__footer_heading}>
      <h1 className={styles.gradient__text}>Placing Dreams, Because Every Dream Matters</h1>
    </div>

    <div className={styles.gpt3__footer_links}>
      <div className={styles.gpt3__footer_links_logo}>
        <Image src='/pd_logo.png' height="50" width="130" /><br />
        <a href='https://www.google.com/maps/dir/15.413152,73.9712484/placing+dreams'>Bunglow No. 2, 1st Floor, Devgans, 4 Bunglow,Andheri west, Mumbai <br /> All Rights Reserved</a>
      </div>
      <div className={styles.gpt3__footer_links_div}>
        <div className={styles.linkers}>
          <p><WhatsAppIcon className={styles.WhatsAppIcon} onClick={() => window.open('https://wa.me/919987851716')} style={{ fontSize: 50, alignContent: 'center', display: 'flex', marginRight: 25 }} /></p>
          <p><InstagramIcon className={styles.InstagramIcon} onClick={() => window.open('https://instagram.com/placingdreams?igshid=YmMyMTA2M2Y=')} style={{ fontSize: 50, marginRight: 20  }} /></p>
          <p><FacebookIcon className={styles.fbIcon} onClick={() => window.open('https://www.facebook.com/placingdreamsinstitute/')} style={{ fontSize: 50 }} /></p>
          <h3 className={styles.mobile}> Mobile 9987851716 </h3>
        </div>
      </div>
    </div>

    <div className={styles.gpt3__footer_copyright}>
      <p>@2021 Placing Dreams. All rights reserved.</p>
    </div>
  </div>
  )
}    

export default Footer;
