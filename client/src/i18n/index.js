import { DEFAULT_LOCALE, messages } from './messages.js'

export function t(key, locale = DEFAULT_LOCALE) {
  return messages[locale]?.[key] ?? messages[DEFAULT_LOCALE][key] ?? key
}
