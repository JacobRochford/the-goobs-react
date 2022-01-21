import styles from './Tours.module.css';
import TourItem from './TourItem';


function Tours({tours}) {
  
  return (
    <div id={styles.tours}>
      <h2>TOURS</h2>
      {tours.map(tour => (
        <TourItem
          key={tour.id}
          id={tour.id}
          date={tour.date}
          city={tour.city}
          arena={tour.arena} />
      ))}
    </div>
  )
}

export default Tours;
