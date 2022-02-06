import styles from './Footer.module.css';
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>The Goobs</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <AiOutlineYoutube className={styles.img} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <AiOutlineTwitter className={styles.img} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <AiOutlineFacebook className={styles.img} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;