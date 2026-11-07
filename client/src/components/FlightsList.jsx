import flights from '../data/flights'

function FlightsList() {
  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Flights: <span>{flights.length} flights available</span>
          </h1>
        </div>

        <ul className="hotel-list">
          {flights.map((flight) => (
            <li key={flight.id} className="hotel-card">
              <div className="hotel-card__link">
                <div className="hotel-card__media">
                  <img
                    className="hotel-card__image hotel-card__image--fixed"
                    src={flight.airlineLogo}
                    alt={flight.airline}
                    loading="lazy"
                    style={{ objectFit: 'contain', padding: '10px' }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{flight.airline}</h3>
                  <p className="hotel-card__city">
                    {flight.departure} → {flight.destination}
                  </p>
                  <p className="hotel-card__description">
                    Departs {flight.departureTime} • Arrives {flight.arrivalTime}
                  </p>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__price-box">
                    <div className="hotel-card__price">${flight.price}</div>
                    <div className="hotel-card__price-note">per person</div>
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

export default FlightsList
