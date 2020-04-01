import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { Spacings } from '../../style'

export const SContainer = styled.div(
  {
    display: 'flex',
    maxWidth: '560px',
    width: '100%',
    padding: Spacings.m,
  },
  flexbox,
)
