import { useState } from 'react'
import flights from '../data/flights'

const SORTERS = {
  price: (a, b) => a.price - b.price,
  duration: (a, b) => durationMinutes(a) - durationMinutes(b),
  departure: (a, b) => new Date(a.departure) - new Date(b.departure),
}

function durationMinutes(flight) {
  return Math.round((new Date(flight.arrival) - new Date(flight.departure)) / 60000)
}

function formatDuration(flight) {
  const minutes = durationMinutes(flight)
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`
}

function formatTime(iso) {
  return iso.slice(11, 16)
}

function dayOffset(flight) {
  const day = (iso) => Date.parse(iso.slice(0, 10))
  return Math.round((day(flight.arrival) - day(flight.departure)) / 86400000)
}

function formatStops(stops) {
  if (stops === 0) return 'Direct'
  return stops === 1 ? '1 stop' : `${stops} stops`
}

function formatPrice(price) {
  return `$${price.toLocaleString('en-US')}`
}

function FlightList() {
  const [onlyDirect, setOnlyDirect] = useState(false)
  const [cabin, setCabin] = useState('All')
  const [sortBy, setSortBy] = useState('price')

  const visibleFlights = flights
    .filter((flight) => !onlyDirect || flight.stops === 0)
    .filter((flight) => cabin === 'All' || flight.cabin === cabin)
    .sort(SORTERS[sortBy])

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
              checked={onlyDirect}
              onChange={(event) => setOnlyDirect(event.target.checked)}
            />{' '}
            Sadece direkt uçuşlar
          </label>
          <label>
            Cabin:{' '}
            <select value={cabin} onChange={(event) => setCabin(event.target.value)}>
              <option value="All">All</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </label>
          <label>
            Sort:{' '}
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="price">Price (low to high)</option>
              <option value="duration">Duration (shortest)</option>
              <option value="departure">Departure time</option>
            </select>
          </label>
        </div>

        {visibleFlights.length === 0 ? (
          <p className="hotel-list-empty">No flights match your filters</p>
        ) : (
          <ul className="hotel-list">
            {visibleFlights.map((flight) => {
              const offset = dayOffset(flight)
              return (
                <li key={flight.id} className="hotel-card">
                  <div className="hotel-card__link">
                    <div className="hotel-card__body">
                      <h3 className="hotel-card__name">
                        {flight.airline} · {flight.flightNumber}
                      </h3>
                      <p className="hotel-card__city">
                        {flight.from} → {flight.to}
                      </p>
                      <p className="hotel-card__description">
                        {formatTime(flight.departure)} – {formatTime(flight.arrival)}
                        {offset > 0 && <sup> +{offset}</sup>} · {formatDuration(flight)}
                      </p>
                      <ul className="hotel-card__tags">
                        <li className="hotel-card__tag">{formatStops(flight.stops)}</li>
                        <li className="hotel-card__tag">{flight.cabin}</li>
                      </ul>
                    </div>
                    <div className="hotel-card__aside">
                      <div className="hotel-card__price-box">
                        <span className="hotel-card__price">{formatPrice(flight.price)}</span>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

export default FlightList
