import { useState } from 'react'
import carRentals from '../data/carrentals'
import fallbackCarPhoto from '../assets/cars/car-1.jpg'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'
import { calculateRentalPrice, formatPrice, validateDateRange } from '../utils/priceCalculator'

function CarRentalList() {
  const [pickupDateTime, setPickupDateTime] = useState('')
  const [returnDateTime, setReturnDateTime] = useState('')
  const [prices, setPrices] = useState({})
  const [error, setError] = useState('')
  const [sortByPrice, setSortByPrice] = useState(false)
  const [isCalculationActive, setIsCalculationActive] = useState(false)

  const availableCount = carRentals.filter((rental) => rental.availability).length

  const recalculatePrices = (pickupDateTime, returnDateTime, isExplicitClick = false) => {
    setError('')

    if (!pickupDateTime || !returnDateTime) {
      if (isExplicitClick) {
        setError('Lütfen alış ve iade tarihleri seçiniz')
      }
      setPrices({})
      return
    }

    const pickupDate = new Date(pickupDateTime)
    const returnDate = new Date(returnDateTime)

    const validation = validateDateRange(pickupDate, returnDate)
    if (!validation.valid) {
      setError(validation.error)
      setPrices({})
      return
    }

    const newPrices = {}
    carRentals.forEach((rental) => {
      const price = calculateRentalPrice(rental.pricePerDay, pickupDate, returnDate)
      newPrices[rental.id] = price
    })
    setPrices(newPrices)
  }

  const handleCalculatePrice = () => {
    setIsCalculationActive(true)
    recalculatePrices(pickupDateTime, returnDateTime, true)
  }

  const getSortedRentals = () => {
    let sorted = [...carRentals]
    if (sortByPrice && Object.keys(prices).length > 0) {
      sorted.sort((a, b) => {
        const priceA = prices[a.id]
        const priceB = prices[b.id]
        if (priceA === null || priceB === null) return 0
        return priceA - priceB
      })
    }
    return sorted
  }

  const sortedRentals = getSortedRentals()

  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Car Rentals: <span>{availableCount} cars available</span>
          </h1>
        </div>

        <div className="car-rental-calculator">
          <div className="calculator-inputs">
            <div className="input-group">
              <label htmlFor="pickup-datetime">Alış Tarihi ve Saati:</label>
              <input
                id="pickup-datetime"
                type="datetime-local"
                value={pickupDateTime}
                onChange={(e) => {
                  const newPickupDateTime = e.target.value
                  setPickupDateTime(newPickupDateTime)
                  if (isCalculationActive) {
                    recalculatePrices(newPickupDateTime, returnDateTime)
                  }
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="return-datetime">İade Tarihi ve Saati:</label>
              <input
                id="return-datetime"
                type="datetime-local"
                value={returnDateTime}
                onChange={(e) => {
                  const newReturnDateTime = e.target.value
                  setReturnDateTime(newReturnDateTime)
                  if (isCalculationActive) {
                    recalculatePrices(pickupDateTime, newReturnDateTime)
                  }
                }}
              />
            </div>
            <button className="btn-primary" onClick={handleCalculatePrice}>
              Fiyat Hesapla
            </button>
            {Object.keys(prices).length > 0 && (
              <div className="sort-option">
                <label>
                  <input
                    type="checkbox"
                    checked={sortByPrice}
                    onChange={(e) => setSortByPrice(e.target.checked)}
                  />
                  Fiyata göre sırala
                </label>
              </div>
            )}
          </div>
          {error && <div className="calculator-error">{error}</div>}
        </div>

        <ul className="hotel-list">
          {sortedRentals.map((rental) => (
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
                  {prices[rental.id] !== undefined && (
                    <div className="calculated-price">
                      <strong>Toplam Fiyat: {formatPrice(prices[rental.id])}</strong>
                    </div>
                  )}
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
