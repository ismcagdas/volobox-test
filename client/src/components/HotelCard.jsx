function HotelCard({ hotel }) {
  return (
    <li className="hotel-card">
      <img
        className="hotel-card__image"
        src={hotel.imageUrl}
        alt={hotel.name}
        loading="lazy"
      />
      <div className="hotel-card__body">
        <h3 className="hotel-card__name">{hotel.name}</h3>
        <p className="hotel-card__city">{hotel.city}</p>
        <p className="hotel-card__description">{hotel.description}</p>
        <div className="hotel-card__footer">
          <span className="hotel-card__rating">⭐ {hotel.rating.toFixed(1)}</span>
          <span className="hotel-card__price">${hotel.pricePerNight} / night</span>
        </div>
      </div>
    </li>
  )
}

export default HotelCard
