import flights from '../data/flights'

function FlightList() {
  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Flights: <span>{flights.length} flights found</span>
          </h1>
        </div>

        <ul className="hotel-list">
          {flights.map((flight) => (
            <li key={flight.id} className="hotel-card">
              <div className="flight-card">
                <div className="flight-card__airline">
                  <img
                    className="flight-card__logo"
                    src={flight.logoUrl}
                    alt={`${flight.airline} logo`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.style.visibility = 'hidden'
                    }}
                  />
                  <span className="flight-card__airline-name">{flight.airline}</span>
                  <span className="flight-card__number">{flight.flightNumber}</span>
                </div>
                <div className="flight-card__route">
                  <div className="flight-card__point">
                    <span className="flight-card__time">{flight.departure}</span>
                    <span className="flight-card__place">{flight.from}</span>
                  </div>
                  <div className="flight-card__duration">
                    <span>{flight.duration}</span>
                    <span className="flight-card__line" aria-hidden="true" />
                    <span>Direct</span>
                  </div>
                  <div className="flight-card__point flight-card__point--end">
                    <span className="flight-card__time">{flight.arrival}</span>
                    <span className="flight-card__place">{flight.to}</span>
                  </div>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__price-box">
                    <span className="hotel-card__price">${flight.price}</span>
                    <span className="hotel-card__price-note">per traveler</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default FlightList
