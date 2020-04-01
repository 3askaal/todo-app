import styled, { CSSObject } from 'styled-components'
import { Spacings } from '../../style'

export const STodo = styled.div(() => ({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
}))

export const STodoCheckbox = styled.div({
  display: 'flex',
  marginRight: Spacings.s,
})

export const STodoInput = styled.div(
  ({ completed }: { completed?: boolean }): CSSObject => ({
    flexGrow: 1,
    position: 'relative',
    textDecoration: completed ? 'line-through' : undefined,

    '> * > *': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),
)

export const STodoButton = styled.div({
  display: 'flex',
  marginLeft: Spacings.s,
})
