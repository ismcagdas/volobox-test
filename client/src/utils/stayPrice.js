export function calculateNights(checkInDate, checkOutDate) {
  const msPerDay = 24 * 60 * 60 * 1000
  const diffMs = checkOutDate - checkInDate
  return Math.ceil(diffMs / msPerDay)
}

export function isFridayOrSaturday(date) {
  const dayOfWeek = date.getDay()
  return dayOfWeek === 5 || dayOfWeek === 6
}

export function calculateStayPrice(pricePerNight, checkInDate, checkOutDate) {
  const nights = calculateNights(checkInDate, checkOutDate)

  if (nights < 1) {
    return null
  }
  if (nights > 30) {
    return null
  }

  let nightsTotal = 0
  const currentDate = new Date(checkInDate)
  currentDate.setHours(0, 0, 0, 0)

  for (let i = 0; i < nights; i++) {
    let nightPrice = pricePerNight
    if (isFridayOrSaturday(currentDate)) {
      nightPrice = pricePerNight * 1.2
    }
    nightsTotal += nightPrice
    currentDate.setDate(currentDate.getDate() + 1)
  }

  const nightsTotalBeforeDiscount = Math.round(nightsTotal * 100) / 100
  let discountAmount = 0
  if (nights >= 7) {
    discountAmount = nightsTotal * 0.1
    nightsTotal = nightsTotal * 0.9
  }

  const cityTax = nights * 2
  const total = Math.round((nightsTotal + cityTax) * 100) / 100

  return {
    nights,
    nightsTotal: nightsTotalBeforeDiscount,
    discountAmount: discountAmount > 0 ? Math.round(discountAmount * 100) / 100 : 0,
    cityTax,
    total,
  }
}

export function validateStayDates(checkInDate, checkOutDate, today) {
  if (checkInDate < today) {
    return { valid: false, error: "Check-in can't be in the past" }
  }

  if (checkOutDate <= checkInDate) {
    return { valid: false, error: 'Check-out must be after check-in' }
  }

  const nights = calculateNights(checkInDate, checkOutDate)
  if (nights > 30) {
    return { valid: false, error: 'A stay can be at most 30 nights' }
  }

  return { valid: true }
}

export function formatPrice(price) {
  if (price === null || price === undefined) {
    return null
  }
  return 'US$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
