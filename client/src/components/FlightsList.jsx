import flights from '../data/flights'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

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
                <div className="hotel-card__media">
                  <img
                    className="hotel-card__image hotel-card__image--fixed"
                    src={flight.imageUrl}
                    alt={flight.airline}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = FALLBACK_IMAGE
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{flight.airline}</h3>
                  <p className="hotel-card__city">
                    {flight.from} → {flight.to}
                  </p>
                  <p className="hotel-card__description">{flight.description}</p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{flight.flightNumber}</li>
                    <li className="hotel-card__tag">
                      {flight.departure} - {flight.arrival}
                    </li>
                    <li className="hotel-card__tag">{flight.duration}</li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
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
