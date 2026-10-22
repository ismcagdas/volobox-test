import { isSuperb } from '../superb.js'
import { t } from '../i18n/index.js'

function SuperbBadge({ rating }) {
  if (!isSuperb(rating)) return null
  return <span className="superb-badge">{t('badge.superb')}</span>
}

export default SuperbBadge
