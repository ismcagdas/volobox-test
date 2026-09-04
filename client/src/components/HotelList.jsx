import hotels from '../data/hotels'
import HotelCard from './HotelCard'

function HotelList() {
  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <p className="hotel-list-subtitle">{hotels.length} hotels found</p>
      <ul className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </ul>
    </section>
  )
}

export default HotelList
