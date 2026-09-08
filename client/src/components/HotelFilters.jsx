const STAR_OPTIONS = [1, 2, 3, 4, 5]

function HotelFilters({
  searchText,
  onSearchTextChange,
  starRating,
  onStarRatingChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  onClear,
}) {
  return (
    <div className="hotel-filters">
      <div className="hotel-filters__field hotel-filters__field--search">
        <label className="hotel-filters__label" htmlFor="hotel-search">
          Search
        </label>
        <input
          id="hotel-search"
          className="hotel-filters__input"
          type="text"
          placeholder="Search by name or city..."
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
        />
      </div>

      <div className="hotel-filters__field">
        <label className="hotel-filters__label" htmlFor="hotel-star-rating">
          Star rating
        </label>
        <select
          id="hotel-star-rating"
          className="hotel-filters__input"
          value={starRating}
          onChange={(event) => onStarRatingChange(event.target.value)}
        >
          <option value="">All stars</option>
          {STAR_OPTIONS.map((star) => (
            <option key={star} value={star}>
              {star} {star === 1 ? 'star' : 'stars'}
            </option>
          ))}
        </select>
      </div>

      <div className="hotel-filters__field">
        <span className="hotel-filters__label" id="hotel-price-range-label">
          Price per night
        </span>
        <div className="hotel-filters__price-range" role="group" aria-labelledby="hotel-price-range-label">
          <input
            className="hotel-filters__input hotel-filters__input--price"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Min"
            aria-label="Minimum price per night"
            value={minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
          />
          <span className="hotel-filters__price-separator">–</span>
          <input
            className="hotel-filters__input hotel-filters__input--price"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Max"
            aria-label="Maximum price per night"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
          />
        </div>
      </div>

      <div className="hotel-filters__field hotel-filters__field--actions">
        <button type="button" className="hotel-filters__clear-btn" onClick={onClear}>
          Clear
        </button>
      </div>
    </div>
  )
}

export default HotelFilters
