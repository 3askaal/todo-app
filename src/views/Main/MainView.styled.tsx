import styled from 'styled-components'
import { Spacings, Colors } from '../../style'

export const SIndexViewCreate = styled.label({
  display: 'flex',
  width: '100%',
  alignItems: 'stretch',

  '* + *': {
    marginLeft: Spacings.s,
  },

  form: {
    width: '100%',
  },
})

export const SIndexViewError = styled.small({
  marginTop: Spacings.xs,
  color: Colors.states.negative,
})

export const SIndexViewOptions = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',

  '* + *': {
    marginLeft: Spacings.s,
  },
})
