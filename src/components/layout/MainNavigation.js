import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.hero}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <h1>The Goobs</h1>
      <div className={styles.container}>
        <button
          id={styles.getAlbumButton}
        >
          Get our Latest Album
        </button>
      </div>
      {/* <button id={styles.playButton}>
        &#9658;
      </button> */}
    </header>
  );
}

export default MainNavigation;