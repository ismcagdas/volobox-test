function ratingLabel(rating) {
  if (rating >= 4.7) return 'Exceptional'
  if (rating >= 4.5) return 'Wonderful'
  if (rating >= 4.2) return 'Very good'
  if (rating >= 4) return 'Good'
  return 'Pleasant'
}

// Badge background per rating tier (same thresholds as ratingLabel):
// green for the best ratings, through yellow-green and amber, to red.
export function ratingColor(rating) {
  if (rating >= 4.7) return '#0b7a3b'
  if (rating >= 4.5) return '#2e9e4f'
  if (rating >= 4.2) return '#6f9a12'
  if (rating >= 4) return '#b36b00'
  return '#c62828'
}

export default ratingLabel
