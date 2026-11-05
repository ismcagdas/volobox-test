import flights from '../data/flights'

function airlineLogo(flight) {
  const code = flight.flightNumber.split(' ')[0]
  return (
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120">' +
        `<rect width="100%" height="100%" fill="${flight.logoColor}"/>` +
        '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
        `font-family="sans-serif" font-weight="700" font-size="44" fill="#fff">${code}</text>` +
        '</svg>',
    )
  )
}

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
                    className="hotel-card__image"
                    style={{ minHeight: 0, height: 'auto' }}
                    src={airlineLogo(flight)}
                    alt={`${flight.airline} logo`}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    {flight.from} → {flight.to}
                  </h3>
                  <p className="hotel-card__city">
                    {flight.airline} · {flight.flightNumber}
                  </p>
                  <p className="hotel-card__description">
                    {flight.departure} – {flight.arrival}
                  </p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{flight.duration}</li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <span className="hotel-card__name" style={{ marginLeft: 'auto' }}>
                    ${flight.price}
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
