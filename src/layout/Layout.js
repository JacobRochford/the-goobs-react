import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;