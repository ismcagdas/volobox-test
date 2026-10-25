function ratingLabel(rating) {
  if (rating >= 4.7) return 'Exceptional'
  if (rating >= 4.5) return 'Wonderful'
  if (rating >= 4.2) return 'Very good'
  if (rating >= 4) return 'Good'
  return 'Pleasant'
}

// Badge background per quality tier, matching the thresholds of ratingLabel.
export function ratingColor(rating) {
  if (rating >= 4.7) return '#0b6b2f'
  if (rating >= 4.5) return '#2e8b3d'
  if (rating >= 4.2) return '#6a8f12'
  if (rating >= 4) return '#b86e00'
  return '#c62828'
}

export default ratingLabel
