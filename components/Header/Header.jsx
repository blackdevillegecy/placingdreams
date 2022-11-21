import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

function Header() {
  return (
  <div className={[styles.gpt3__header, styles.section__padding].join(" ")} id="header">
    <div className={styles.gpt3__header_content}>
      <h1 className={styles.gradient__text}>The Best Film School In India</h1>
      <p>Working in the film industry is considered to be one of the most tempting and glamorous careers of the 21st century, but is the way to the zenith really going to be a cakewalk? Definitely not. With the success rate less than most of the other career paths, it is really a difficult task to get into this profession, but everything is possible for a dreamer</p>

      <div className={styles.gpt3__header_content__input}>
        <Link href="https://www.indiatoday.in/impact-feature/story/placing-dreams-one-of-the-best-film-schools-in-mumbai-2297123-2022-11-14"><button type="button">Take a Look at our gallery</button></Link>
      </div>

      <div className={styles.gpt3__header_content__people}>
        <p>More than 100 success stories says it all</p>
      </div>
    </div>
    <div className={styles.gpt3__header_image}>
      <Image src='/home_neon.png' alt="" width="500" height="500" id="neon" />
    </div>
  </div>
  );
}

export default Header;