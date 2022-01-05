import styles from './Tours.module.css';

function Tours() {
  const TOUR_DATA = [
    {
      date: "Jan 16",
      city: "San Diego, CA",
      arena: "Pechanga Arena",
    },
    {
      date: "Jan 19",
      city: "Los Angeles, CA",
      arena: "Crypto.com",
    },
    {
      date: "Jan 22",
      city: "Portland, OR",
      arena: "Moda Center",
    },
    {
      date: "Feb 16",
      city: "Las Vegas, NV",
      arena: "T-Mobile Arena",
    },
    {
      date: "Feb 29",
      city: "Detroit, MI",
      arena: "Little Caesars Arena",
    },
    {
      date: "Mar 17",
      city: "Baltimore, MD",
      arena: "Royal Farms Arena",
    },
  ];

  return (
    <div id={styles.tours}>
        <h2>TOURS</h2>
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>DEC 16</span>
          <span className={styles.tourCity}>San Fransico, CA</span>
          <span className={styles.tourArena}>Pelosi's House</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
      <hr className={styles.line}/>
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>DEC 19</span>
          <span className={styles.tourCity}>SEATTLE, WA</span>
          <span className={styles.tourArena}>CLIMATE PLEDGE ARENA</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
        <hr />
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>DEC 22</span>
          <span className={styles.tourCity}>PORTLAND, OR</span>
          <span className={styles.tourArena}>MODA CENTER</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
        <hr />
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>JAN 2</span>
          <span className={styles.tourCity}>LAS VEGAS, NV</span>
          <span className={styles.tourArena}>T-MOBILE ARENA</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
        <hr />
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>DEC 29</span>
          <span className={styles.tourCity}>DETROIT, MI</span>
          <span className={styles.tourArena}>LITTLE CAESARS ARENA</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
        <hr />
        <div className={styles.tourRow}>
          <span className={styles.tourDate}>JAN 7</span>
          <span className={styles.tourCity}>BALTIMORE, MD</span>
          <span className={styles.tourArena}>ROYAL FARMS ARENA</span>
          <button className={styles.buyTicketButton} type="button">BUY TICKETS</button>
        </div>
      </div>
  )
}

export default Tours;