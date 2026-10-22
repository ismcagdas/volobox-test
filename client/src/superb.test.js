import test from 'node:test'
import assert from 'node:assert/strict'
import { isSuperb } from './superb.js'
import { t } from './i18n/index.js'

test('shows badge above the 4.5 threshold', () => {
  assert.equal(isSuperb(4.9), true)
  assert.equal(isSuperb(5), true)
})

test('shows badge at exactly 4.5', () => {
  assert.equal(isSuperb(4.5), true)
})

test('no badge just below 4.5', () => {
  assert.equal(isSuperb(4.49), false)
  assert.equal(isSuperb(4.1), false)
})

test('no badge when there is no rating', () => {
  assert.equal(isSuperb(0), false)
  assert.equal(isSuperb(undefined), false)
  assert.equal(isSuperb(null), false)
  assert.equal(isSuperb(NaN), false)
})

test('badge text is localized', () => {
  assert.equal(t('badge.superb'), 'Superb')
  assert.equal(t('badge.superb', 'tr'), 'Muhteşem')
  assert.equal(t('badge.superb', 'xx'), 'Superb')
})
