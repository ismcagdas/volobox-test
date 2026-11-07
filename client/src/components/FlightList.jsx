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
              <div className="hotel-card__link">
                <div className="hotel-card__media">
                  <img
                    className="hotel-card__image hotel-card__image--fixed"
                    src={flight.logoUrl}
                    alt={flight.airline}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23e5e4e7%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2218%22 fill=%22%236b6375%22%3ENo logo%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{flight.airline}</h3>
                  <p className="hotel-card__city">
                    {flight.from} → {flight.to}
                  </p>
                  <p className="hotel-card__description">Duration: {flight.duration}</p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">Flight</li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__score">
                    <span className="hotel-card__score-text">
                      <span className="hotel-card__score-word">Price</span>
                    </span>
                    <span
                      className="hotel-card__score-badge"
                      style={{
                        background: '#1e88e5',
                        color: 'white',
                      }}
                    >
                      ${flight.price}
                    </span>
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
