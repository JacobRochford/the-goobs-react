import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.tourSection}>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;