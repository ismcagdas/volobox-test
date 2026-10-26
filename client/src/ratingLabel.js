function ratingLabel(rating) {
  if (rating >= 4.7) return 'Exceptional'
  if (rating >= 4.5) return 'Wonderful'
  if (rating >= 4.2) return 'Very good'
  if (rating >= 4) return 'Good'
  return 'Pleasant'
}

// Badge background per quality tier. The top tiers match the thresholds of
// ratingLabel; below 3 the red gets darker as the rating drops.
export function ratingColor(rating) {
  if (rating >= 4.7) return '#0b6b2f'
  if (rating >= 4.5) return '#2e8b3d'
  if (rating >= 4.2) return '#6a8f12'
  if (rating >= 4) return '#b8860b'
  if (rating >= 3) return '#e8590c'
  const clamped = Math.max(rating, 0)
  const lightness = 20 + (clamped / 3) * 25
  return `hsl(0, 75%, ${lightness.toFixed(0)}%)`
}

export default ratingLabel
