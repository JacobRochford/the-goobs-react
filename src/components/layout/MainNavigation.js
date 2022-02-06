import Link from 'next/link';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.hero}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
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