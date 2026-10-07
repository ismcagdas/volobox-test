// Price helpers for the booking summary.

export function nightsBetween(checkIn, checkOut) {
  const ms = new Date(checkOut) - new Date(checkIn)
  return Math.round(ms / (1000 * 60 * 60 * 24)) + 1
}

export function totalPrice(hotel, checkIn, checkOut, discountPercent) {
  const nights = nightsBetween(checkIn, checkOut)
  let total = hotel.pricePerNight * nights
  if (discountPercent) {
    total = total - total * discountPercent
  }
  return total.toFixed(2)
}
