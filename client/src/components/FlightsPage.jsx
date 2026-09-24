const SAMPLE_FLIGHTS = [
  { id: 1, airline: 'SkyWays', from: 'IST', to: 'LHR', departure: '08:15', arrival: '10:05', duration: '3h 50m', stops: 'Direct', price: 189 },
  { id: 2, airline: 'BlueJet', from: 'IST', to: 'CDG', departure: '11:40', arrival: '14:20', duration: '3h 40m', stops: 'Direct', price: 164 },
  { id: 3, airline: 'Aerolink', from: 'IST', to: 'JFK', departure: '13:05', arrival: '17:10', duration: '11h 05m', stops: '1 stop', price: 542 },
]

function FlightsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">Compare and book flights</h1>
          <p className="hero__subtitle">Discover great deals on flights to hundreds of destinations</p>
          <form className="searchbar" onSubmit={(event) => event.preventDefault()}>
            <label className="searchbar__field">
              <span className="searchbar__icon" aria-hidden="true">
                🛫
              </span>
              <input type="text" className="searchbar__input" placeholder="Leaving from" />
            </label>
            <label className="searchbar__field">
              <span className="searchbar__icon" aria-hidden="true">
                🛬
              </span>
              <input type="text" className="searchbar__input" placeholder="Going to" />
            </label>
            <button type="submit" className="searchbar__submit">
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="flights-page">
        <h2 className="hotel-list-title">Sample flights</h2>
        <p className="flights-page__note">Flight search is coming soon. These results are placeholders.</p>
        <ul className="flight-list">
          {SAMPLE_FLIGHTS.map((flight) => (
            <li key={flight.id} className="flight-card panel">
              <div className="flight-card__airline">{flight.airline}</div>
              <div className="flight-card__route">
                <strong>{flight.departure}</strong> {flight.from}
                <span className="flight-card__meta">
                  {flight.duration} · {flight.stops}
                </span>
                <strong>{flight.arrival}</strong> {flight.to}
              </div>
              <div className="flight-card__price">${flight.price}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default FlightsPage
