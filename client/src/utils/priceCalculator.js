export function calculateDays(pickupDate, returnDate) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffMs = returnDate - pickupDate;
  return Math.ceil(diffMs / msPerDay);
}

export function isWeekendDay(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

export function calculateRentalPrice(pricePerDay, pickupDate, returnDate) {
  const days = calculateDays(pickupDate, returnDate);

  if (days < 1) {
    return null;
  }
  if (days > 30) {
    return null;
  }

  let totalPrice = 0;
  const currentDate = new Date(pickupDate);
  currentDate.setHours(0, 0, 0, 0);
  const returnDateNormalized = new Date(returnDate);
  returnDateNormalized.setHours(0, 0, 0, 0);

  for (let i = 0; i < days; i++) {
    let dayPrice = pricePerDay;
    if (isWeekendDay(currentDate)) {
      dayPrice = pricePerDay * 1.2;
    }
    totalPrice += dayPrice;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (days >= 7) {
    totalPrice = totalPrice * 0.9;
  }

  return Math.round(totalPrice * 100) / 100;
}

export function formatPrice(price) {
  if (price === null) {
    return null;
  }
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function validateDateRange(pickupDate, returnDate) {
  const now = new Date();

  if (pickupDate < now) {
    return { valid: false, error: 'Alış tarihi geçmiş olamaz' };
  }

  if (returnDate <= pickupDate) {
    return { valid: false, error: 'İade tarihi alış tarihinden sonra olmalıdır' };
  }

  const days = calculateDays(pickupDate, returnDate);
  if (days > 30) {
    return { valid: false, error: 'Maksimum 30 gün kiralama yapılabilir' };
  }

  return { valid: true };
}
