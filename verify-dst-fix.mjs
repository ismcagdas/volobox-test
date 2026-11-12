import { calculateNights, calculateStayPrice } from './src/utils/stayPrice.js'

// Test the original Grand Plaza case
const fri = new Date('2026-11-13T00:00:00')
const mon = new Date('2026-11-16T00:00:00')
console.log('Grand Plaza (Fri-Mon):')
console.log('  Nights:', calculateNights(fri, mon))
const result = calculateStayPrice(220, fri, mon)
console.log('  Total:', result.total)
console.log('  Expected: 3 nights, total 754')
console.log()

// Test 7-night case
const start = new Date('2026-11-13T00:00:00')
const end = new Date('2026-11-20T00:00:00')
console.log('7-night stay:')
console.log('  Nights:', calculateNights(start, end))
const result2 = calculateStayPrice(100, start, end)
console.log('  Total:', result2.total)
console.log('  Expected: 7 nights, total 680')
console.log()

// Test edge case: DST transition (Nov 6-8, 2027 in America/New_York)
// This transition happens when local time goes from 2:00 AM to 1:00 AM on Nov 6
// But since we're using midnight dates, it shouldn't affect the calculation
const nov6 = new Date('2027-11-06T00:00:00')
const nov8 = new Date('2027-11-08T00:00:00')
console.log('DST edge case (Nov 6-8, 2027):')
console.log('  Nights:', calculateNights(nov6, nov8))
console.log('  Expected: 2 nights (should handle DST correctly)')
