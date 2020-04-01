import styled from 'styled-components'
import { InputProps } from './Input'
import { Colors, Spacings, Theme } from '../../style'

export const SInput = styled.input(({ error }: InputProps) => ({
  display: 'flex',
  width: '100%',
  borderColor: error ? Colors.states.negative : 'transparent',
  background: 'transparent',
  borderRadius: '5px',
  color: 'inherit',
  ...Theme,
  padding: `${Spacings.xs} ${Spacings.s}`,
}))
