import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import hotels from '../data/hotels'
import ratingLabel from '../ratingLabel'
import SuperbBadge from './SuperbBadge'

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

const handleImageError = (event) => {
  event.currentTarget.onerror = null
  event.currentTarget.src = FALLBACK_IMAGE
}

function HotelDetail() {
  const { id } = useParams()
  const hotel = hotels.find((item) => String(item.id) === id)
  const gallery = hotel
    ? [{ url: hotel.imageUrl, caption: 'The hotel' }, ...(hotel.rooms || [])]
    : []
  const [activeUrl, setActiveUrl] = useState(gallery[0]?.url)
  const active = gallery.find((image) => image.url === activeUrl) || gallery[0]

  if (!hotel) {
    return (
      <section className="hotel-detail-section">
        <Link className="hotel-detail__back" to="/">
          ← Back to search results
        </Link>
        <p className="hotel-list-empty">Hotel not found.</p>
      </section>
    )
  }

  const rating = Number(hotel.rating || 0)

  return (
    <section className="hotel-detail-section">
      <nav className="breadcrumbs">
        <Link to="/">Home</Link>
        <span aria-hidden="true">›</span>
        <span>{hotel.city}</span>
        <span aria-hidden="true">›</span>
        <span className="breadcrumbs__current">{hotel.name}</span>
      </nav>

      <div className="hotel-detail__topbar">
        <div>
          <h1 className="hotel-detail__name">{hotel.name}</h1>
          <p className="hotel-detail__address">📍 {hotel.address || hotel.city}</p>
        </div>
        <div className="hotel-detail__book">
          <span className="hotel-detail__price">US${hotel.pricePerNight}</span>
          <span className="hotel-detail__price-unit">per night</span>
          <button type="button" className="btn-primary">
            Reserve
          </button>
        </div>
      </div>

      <div className="hotel-detail__gallery">
        <figure className="hotel-detail__figure">
          <img
            className="hotel-detail__main-image"
            src={active.url}
            alt={`${hotel.name} — ${active.caption}`}
            onError={handleImageError}
          />
          <figcaption className="hotel-detail__caption">{active.caption}</figcaption>
        </figure>
        {gallery.length > 1 && (
          <div className="hotel-detail__thumbnails">
            {gallery.map((image) => (
              <button
                key={image.url}
                type="button"
                title={image.caption}
                aria-label={image.caption}
                aria-pressed={image.url === active.url}
                className={
                  'hotel-detail__thumbnail' +
                  (image.url === active.url ? ' hotel-detail__thumbnail--active' : '')
                }
                onClick={() => setActiveUrl(image.url)}
              >
                <img src={image.url} alt="" loading="lazy" onError={handleImageError} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hotel-detail__columns">
        <div className="hotel-detail__main">
          <div className="panel">
            <p className="hotel-detail__description">
              {hotel.longDescription || hotel.description}
            </p>
          </div>

          {hotel.amenities?.length > 0 && (
            <div className="panel hotel-detail__amenities">
              <h2>Most popular facilities</h2>
              <ul className="hotel-detail__amenities-list">
                {hotel.amenities.map((amenity) => (
                  <li key={amenity} className="hotel-detail__amenity">
                    <span aria-hidden="true">✓</span> {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="hotel-detail__side">
          <div className="panel score-panel">
            <div className="score-panel__row">
              <span className="score-panel__badge">{rating.toFixed(1)}</span>
              <div>
                <p className="score-panel__word">
                  {ratingLabel(rating)} <SuperbBadge rating={rating} />
                </p>
                <p className="score-panel__hint">Guest review score</p>
              </div>
            </div>
            <p className="score-panel__note">
              Guests loved the location and the service at {hotel.name}.
            </p>
          </div>

          <div className="panel">
            <h2>Good to know</h2>
            <ul className="facts">
              <li>
                <span>Check-in</span>
                <strong>15:00 – 23:00</strong>
              </li>
              <li>
                <span>Check-out</span>
                <strong>07:00 – 11:00</strong>
              </li>
              <li>
                <span>Cancellation</span>
                <strong>Free until 24h before</strong>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Link className="hotel-detail__back" to="/">
        ← Back to search results
      </Link>
    </section>
  )
}

export default HotelDetail
