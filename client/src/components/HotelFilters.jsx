const RATING_OPTIONS = [
  { label: 'Any rating', value: 0 },
  { label: '3+ stars', value: 3 },
  { label: '4+ stars', value: 4 },
  { label: '4.5+ stars', value: 4.5 },
]

function HotelFilters({ minRating, onMinRatingChange, maxPrice, priceBounds, onMaxPriceChange }) {
  return (
    <aside className="hotel-filters">
      <h2 className="hotel-filters__title">Filters</h2>

      <div className="hotel-filters__group">
        <span className="hotel-filters__label">Minimum rating</span>
        <select
          className="hotel-filters__select"
          value={minRating}
          onChange={(event) => onMinRatingChange(Number(event.target.value))}
        >
          {RATING_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="hotel-filters__group">
        <span className="hotel-filters__label">
          Max price: ${maxPrice} / night
        </span>
        <input
          type="range"
          className="hotel-filters__range"
          min={priceBounds.min}
          max={priceBounds.max}
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(Number(event.target.value))}
        />
      </div>
    </aside>
  )
}

export default HotelFilters
