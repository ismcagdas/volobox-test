import { Link } from 'react-router-dom'
import ratingLabel, { ratingColor } from '../ratingLabel'

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

function HotelCard({ hotel }) {
  const rating = Number(hotel.rating || 0)

  return (
    <li className="hotel-card">
      <Link className="hotel-card__link" to={`/hotels/${hotel.id}`}>
        <div className="hotel-card__media">
          <img
            className="hotel-card__image"
            src={hotel.imageUrl}
            alt={hotel.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = FALLBACK_IMAGE
            }}
          />
        </div>

        <div className="hotel-card__body">
          <h3 className="hotel-card__name">{hotel.name}</h3>
          <p className="hotel-card__city">{hotel.city}</p>
          <p className="hotel-card__description">{hotel.description}</p>
          {hotel.amenities?.length > 0 && (
            <ul className="hotel-card__tags">
              {hotel.amenities.slice(0, 3).map((amenity) => (
                <li key={amenity} className="hotel-card__tag">
                  {amenity}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hotel-card__aside">
          <div className="hotel-card__score">
            <span className="hotel-card__score-text">
              <span className="hotel-card__score-word">{ratingLabel(rating)}</span>
            </span>
            <span
              className="hotel-card__score-badge"
              style={{ background: ratingColor(rating) }}
            >
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="hotel-card__price-box">
            <span className="hotel-card__price-note">1 night</span>
            <span className="hotel-card__price">US${hotel.pricePerNight}</span>
            <span className="hotel-card__price-note">Includes taxes and fees</span>
            <span className="hotel-card__cta">See availability →</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default HotelCard
