import flights from '../data/flights'

const FALLBACK_LOGO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="12" fill="#6b6375">Airline</text>' +
      '</svg>',
  )

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
              <div className="hotel-card__link">
                <div className="hotel-card__media">
                  <img
                    className="flight-logo"
                    src={flight.logoUrl}
                    alt={flight.airline}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = FALLBACK_LOGO
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="flight-route">
                    {flight.from} → {flight.to}
                  </h3>
                  <p className="flight-airline">{flight.airline}</p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">
                      Departs: {flight.departure}
                    </li>
                    <li className="hotel-card__tag">
                      Arrives: {flight.arrival}
                    </li>
                    <li className="hotel-card__tag">
                      Duration: {flight.duration}
                    </li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__price-box">
                    <div className="hotel-card__price">
                      {flight.price}
                    </div>
                    <div className="hotel-card__price-note">
                      per person
                    </div>
                  </div>
                  <button className="hotel-card__cta">
                    Book
                  </button>
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
