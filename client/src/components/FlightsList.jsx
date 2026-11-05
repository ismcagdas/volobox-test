import { useState } from 'react'
import flights from '../data/flights'
import { ratingColor, ratingTextColor } from '../ratingLabel'

function FlightsList() {
  const [onlyTopRated, setOnlyTopRated] = useState(false)
  const visibleFlights = onlyTopRated
    ? flights.filter((flight) => flight.rating >= 4.5)
    : flights

  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Flights: <span>{visibleFlights.length} flights found</span>
          </h1>
          <label>
            <input
              type="checkbox"
              checked={onlyTopRated}
              onChange={(event) => setOnlyTopRated(event.target.checked)}
            />{' '}
            Sadece 4.5 ve üzeri
          </label>
        </div>

        <ul className="hotel-list">
          {visibleFlights.map((flight) => (
            <li key={flight.id} className="hotel-card">
              <div className="hotel-card__link">
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{flight.airline}</h3>
                  <p className="hotel-card__city">
                    {flight.from} → {flight.to}
                  </p>
                  <p className="hotel-card__description">
                    {flight.departureTime} - {flight.arrivalTime} ({flight.duration})
                  </p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{flight.flightNumber}</li>
                    <li className="hotel-card__tag">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__score">
                    <span className="hotel-card__score-text">
                      <span className="hotel-card__score-word">${flight.price}</span>
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
