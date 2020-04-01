import styled, { CSSObject } from 'styled-components'
import { flexbox } from 'styled-system'
import { Spacings } from '../../style'
import { SpacerProps } from './Spacer'

export const SSpacer = styled.div<SpacerProps>(
  ({ size = 'm', direction = 'column' }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: direction,

    '> * + *': {
      ...((size &&
        direction === 'column' && {
          marginTop: Spacings[size],
        }) as CSSObject),

      ...((size &&
        direction === 'row' && {
          marginLeft: Spacings[size],
        }) as CSSObject),
    },
  }),
  flexbox,
)
