function ratingLabel(rating) {
  if (rating >= 4.9) return 'Superb'
  if (rating >= 4.7) return 'Exceptional'
  if (rating >= 4.5) return 'Wonderful'
  if (rating >= 4.2) return 'Very good'
  if (rating >= 4) return 'Good'
  return 'Pleasant'
}

export default ratingLabel
