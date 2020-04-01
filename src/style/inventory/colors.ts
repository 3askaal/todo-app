import { darken, brighten, rgba } from '../utils'

const PRIMARY = '#494ca2'
const SECONDARY = '#8186d5'

export const Colors = {
  black: brighten('black', 0.8),
  white: darken('white', 0.25),
  primary: PRIMARY,
  primaryTransparent: rgba(PRIMARY, 0.25),
  primaryDark: darken(PRIMARY, 0.7),
  secondary: SECONDARY,
  background: '#e3e7f1',
  states: {
    negative: '#ef5350',
    positive: '#66bb6a',
  },
}
