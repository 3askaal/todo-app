import styled from 'styled-components'
import { Spacings, Theme, Colors } from '../../style'

export const SButton = styled.button(() => ({
  backgroundColor: 'transparent',
  color: Colors.primary,
  borderRadius: '5px',
  cursor: 'pointer',
  ...Theme,
  borderColor: Colors.secondary,
  padding: `${Spacings.xs} ${Spacings.s}`,

  '@media (hover: hover)': {
    ':hover': {
      color: Colors.white,
      backgroundColor: Colors.primary,
    },
  },
}))
