export const SUPERB_MIN_RATING = 4.5

export function isSuperb(rating) {
  const value = Number(rating)
  return Number.isFinite(value) && value >= SUPERB_MIN_RATING
}
