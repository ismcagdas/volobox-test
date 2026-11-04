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
              <div className="hotel-card__link hotel-card__link--no-media">
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    {flight.from} → {flight.to}
                  </h3>
                  <p className="hotel-card__city">
                    {flight.airline} · {flight.flightNumber}
                  </p>
                  <p className="hotel-card__description">
                    {flight.departure} – {flight.arrival} ({flight.duration})
                  </p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">
                      {flight.stops === 0 ? 'Direct' : `${flight.stops} stop`}
                    </li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <strong>${flight.price}</strong>
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
