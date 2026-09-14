const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

function formatLastSynced(isoString) {
  if (!isoString) return 'Unknown'
  const date = new Date(isoString)
  if (Number.isNaN(date.getTime())) return 'Unknown'
  return date.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function HotelCard({ hotel }) {
  return (
    <li className="hotel-card">
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
      <div className="hotel-card__body">
        <h3 className="hotel-card__name">{hotel.name}</h3>
        <p className="hotel-card__city">{hotel.city}</p>
        <p className="hotel-card__description">{hotel.description}</p>
        <div className="hotel-card__footer">
          <span className="hotel-card__rating">⭐ {Number(hotel.rating || 0).toFixed(1)}</span>
          <span className="hotel-card__price">${hotel.pricePerNight} / night</span>
        </div>
        <div className="hotel-card__sync">
          <span className="hotel-card__sync-label">Last synced</span>
          <span className="hotel-card__sync-value">{formatLastSynced(hotel.lastSyncedAt)}</span>
        </div>
      </div>
    </li>
  )
}

export default HotelCard
