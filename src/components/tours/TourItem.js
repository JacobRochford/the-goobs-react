import styles from './TourItem.module.css';

function TourItem({id, date, city, arena}) {
  return (
      <div>
        <div className={styles.tourRow} id={id}>
          <span className={styles.tourDate}>{date}</span>
          <span className={styles.tourCity}>{city}</span>
          <span className={styles.tourArena}>{arena}</span>
          <button className={styles.buyTicketButton}>
            BUY TICKETS
          </button>
        </div>
        <hr className={styles.line} />
      </div>
    )

}

export default TourItem;