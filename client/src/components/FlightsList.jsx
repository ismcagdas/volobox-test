import flights from '../data/flights'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

function FlightsList() {
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
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{flight.airline}</h3>
                  <p className="hotel-card__city">{flight.flightNumber}</p>
                  <div className="flight-route">
                    <span>{flight.departure}</span>
                    <span className="flight-arrow">→</span>
                    <span>{flight.arrival}</span>
                  </div>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">
                      {flight.departureTime} - {flight.arrivalTime}
                    </li>
                    <li className="hotel-card__tag">{flight.duration}</li>
                    <li className="hotel-card__tag">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="flight-price">${flight.price}</div>
                  <div className="hotel-card__score">
                    <span className="hotel-card__score-text">
                      <span className="hotel-card__score-word">{ratingLabel(flight.rating)}</span>
                    </span>
                    <span
                      className="hotel-card__score-badge"
                      style={{
                        background: ratingColor(flight.rating),
                        color: ratingTextColor(flight.rating),
                      }}
                    >
                      {flight.rating.toFixed(1)}
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

export default FlightsList
