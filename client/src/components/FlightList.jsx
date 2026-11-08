import flights from '../data/flights'
import { formatTo12Hour } from '../utils/timeFormat'

function FlightList() {
  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Flights: <span>{flights.length} flights found</span>
          </h1>
        </div>

        <ul className="flight-list">
          {flights.map((flight) => (
            <li key={flight.id} className="flight-card">
              <div className="flight-card__content">
                <div className="flight-card__logo">
                  <img
                    src={flight.airlineLogo}
                    alt={flight.airline}
                    className="flight-card__airline-logo"
                    loading="lazy"
                  />
                </div>
                <div className="flight-card__details">
                  <div className="flight-card__route">
                    <span className="flight-card__airport">{flight.from}</span>
                    <span className="flight-card__arrow">→</span>
                    <span className="flight-card__airport">{flight.to}</span>
                  </div>
                  <div className="flight-card__times">
                    <span className="flight-card__time">
                      <strong>{formatTo12Hour(flight.departureTime)}</strong>
                    </span>
                    <span className="flight-card__time-arrow">→</span>
                    <span className="flight-card__time">
                      <strong>{formatTo12Hour(flight.arrivalTime)}</strong>
                    </span>
                  </div>
                  <p className="flight-card__airline">{flight.airline}</p>
                </div>
                <div className="flight-card__price">
                  <span className="flight-card__price-value">
                    {flight.currency} {flight.price}
                  </span>
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
