import Tours from "../components/tours/Tours";

const TOUR_DATA = [
  {
    id: "123",
    date: "Jan 16",
    city: "San Diego, CA",
    arena: "Pechanga Arena",
  },
  {
    id: "234",
    date: "Jan 19",
    city: "Los Angeles, CA",
    arena: "Crypto.com",
  },
  {
    id: "345",
    date: "Jan 22",
    city: "Portland, OR",
    arena: "Moda Center",
  },
  {
    id: "456",
    date: "Feb 16",
    city: "Las Vegas, NV",
    arena: "T-Mobile Arena",
  },
  {
    id: "567",
    date: "Feb 29",
    city: "Detroit, MI",
    arena: "Little Caesars Arena",
  },
  {
    id: "678",
    date: "Mar 17",
    city: "Baltimore, MD",
    arena: "Royal Farms Arena",
  },
];

function Homepage() {
  return (
    <div>
      <Tours tours={TOUR_DATA} />
      
    </div>
  );
}

export default Homepage;