import carRentals from '../data/carrentals'
import fallbackCarPhoto from '../assets/cars/car-1.jpg'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

function CarRentalList() {
  const availableCount = carRentals.filter((rental) => rental.availability).length
  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Car Rentals: <span>{availableCount} cars available</span>
          </h1>
        </div>

        <ul className="hotel-list">
          {carRentals.map((rental) => (
            <li key={rental.id} className="hotel-card">
              <div className="hotel-card__link">
                <div className="hotel-card__media">
                  <img
                    className="hotel-card__image hotel-card__image--fixed"
                    src={rental.imageUrl}
                    alt={`Sample rental car for ${rental.model}`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = fallbackCarPhoto
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{rental.model}</h3>
                  <p className="hotel-card__city">{rental.company}</p>
                  <p className="hotel-card__description">
                    {rental.features.join(' • ')}
                  </p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">
                      {rental.pricePerDay} {rental.currency}/day
                    </li>
                    <li className={`hotel-card__tag ${rental.availability ? 'available' : 'unavailable'}`}>
                      {rental.availability ? 'Available' : 'Not Available'}
                    </li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__score">
                    <span className="hotel-card__score-text">
                      <span className="hotel-card__score-word">{ratingLabel(rental.rating)}</span>
                      <span className="hotel-card__score-subtext">({rental.reviews} reviews)</span>
                    </span>
                    <span
                      className="hotel-card__score-badge"
                      style={{
                        background: ratingColor(rental.rating),
                        color: ratingTextColor(rental.rating),
                      }}
                    >
                      {rental.rating.toFixed(1)}
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

export default CarRentalList
