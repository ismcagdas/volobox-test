import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import hotels from '../data/hotels'

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

function HotelDetail() {
  const { id } = useParams()
  const hotel = hotels.find((item) => String(item.id) === id)
  const gallery = hotel?.gallery?.length ? hotel.gallery : hotel ? [hotel.imageUrl] : []
  const [activeImage, setActiveImage] = useState(gallery[0])

  if (!hotel) {
    return (
      <section className="hotel-detail-section">
        <Link className="hotel-detail__back" to="/">
          ← Back to hotels
        </Link>
        <p className="hotel-list-empty">Hotel not found.</p>
      </section>
    )
  }

  return (
    <section className="hotel-detail-section">
      <Link className="hotel-detail__back" to="/">
        ← Back to hotels
      </Link>

      <div className="hotel-detail__gallery">
        <img
          className="hotel-detail__main-image"
          src={activeImage}
          alt={hotel.name}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = FALLBACK_IMAGE
          }}
        />
        {gallery.length > 1 && (
          <div className="hotel-detail__thumbnails">
            {gallery.map((image) => (
              <button
                key={image}
                type="button"
                className={
                  'hotel-detail__thumbnail' +
                  (image === activeImage ? ' hotel-detail__thumbnail--active' : '')
                }
                onClick={() => setActiveImage(image)}
              >
                <img
                  src={image}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = FALLBACK_IMAGE
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hotel-detail__header">
        <div>
          <h1 className="hotel-detail__name">{hotel.name}</h1>
          <p className="hotel-detail__address">{hotel.address || hotel.city}</p>
        </div>
        <div className="hotel-detail__price-box">
          <span className="hotel-detail__rating">⭐ {Number(hotel.rating || 0).toFixed(1)}</span>
          <span className="hotel-detail__price">
            ${hotel.pricePerNight} <span className="hotel-detail__price-unit">/ night</span>
          </span>
        </div>
      </div>

      <p className="hotel-detail__description">{hotel.longDescription || hotel.description}</p>

      {hotel.amenities?.length > 0 && (
        <div className="hotel-detail__amenities">
          <h2>Amenities</h2>
          <ul className="hotel-detail__amenities-list">
            {hotel.amenities.map((amenity) => (
              <li key={amenity} className="hotel-detail__amenity">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default HotelDetail
