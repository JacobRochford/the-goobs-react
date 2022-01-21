import styles from './Backdrop.module.css';

function Backdrop({onClick}) {
  return <div className={styles.backdrop} onClick={onClick} />
}

export default Backdrop;