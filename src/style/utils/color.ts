import chroma from 'chroma-js'

export function darken (color: string, amount = 0.2): string {
  return chroma(color).darken(amount).hex()
}

export function brighten (color: string, amount = 0.2): string {
  return chroma(color).brighten(amount).hex()
}

export function rgba (color: string, amount = 0.2): string {
  return chroma(color).alpha(amount).hex()
}

export function mix (firstColor: string, secondColor: string, amount?: number): string {
  return chroma.mix(firstColor, secondColor, amount).hex()
}
