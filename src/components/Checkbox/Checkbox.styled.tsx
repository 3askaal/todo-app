import styled from 'styled-components'
import { CheckboxProps } from './Checkbox'
import { Spacings, Colors, Theme, pickTheme } from '../../style'

export const SCheckbox = styled.label(({ checked }: CheckboxProps) => ({
  display: 'flex',
  padding: Spacings.xs,
  borderRadius: '5px',
  cursor: 'pointer',
  color: checked ? Colors.primary : 'transparent',
  ...Theme,

  '@media (hover: hover)': {
    ':hover': {
      color: Colors.secondary,
    },
  },
}))

export const SCheckboxIndicator = styled.div({
  display: 'flex',
  alignItems: 'center',
  ...pickTheme(['transition']),
})

export const SCheckboxInput = styled.input({
  display: 'none',
})
