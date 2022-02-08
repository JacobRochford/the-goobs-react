import Link from 'next/link';
import styles from './MainNavigation.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';



function MainNavigation() {
  return (
    <header className={styles.hero}>
      <nav>
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
      </nav>
        <div>
          <button>
            <AiOutlineShoppingCart className={styles.cartIcon}/>
          </button>
        </div>
      <h1>The Goobs</h1>
      {/* <div className={styles.container}>
      < button
        id={styles.getAlbumButton}
      >
        Get our Latest Album
      </button>
    </div > */}
    </header>
  );
}

export default MainNavigation;