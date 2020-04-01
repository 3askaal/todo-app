import { pick } from 'lodash'
import { Colors, Spacings } from './inventory'

export const Theme = {
  border: `2px solid ${Colors.primary}`,
  transition: 'all 0.2s ease',
  padding: Spacings.xs,
}

export function pickTheme(fields: string[]): object {
  return pick(Theme, fields)
}
