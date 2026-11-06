import { useState } from 'react'
import flights from '../data/flights'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

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
                    {flight.departure} → {flight.arrival}
                  </p>
                  <p className="hotel-card__description">
                    Flight {flight.flightNumber} | {flight.departureTime} - {flight.arrivalTime} ({flight.duration})
                  </p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{flight.price}</li>
                    <li className="hotel-card__tag">{flight.seats} seats left</li>
                  </ul>
                </div>
                <div className="hotel-card__aside" style={{ marginLeft: 'auto' }}>
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
