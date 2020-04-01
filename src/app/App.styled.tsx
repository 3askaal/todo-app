import styled from 'styled-components'
import { fontSize, FontSizeProps } from 'styled-system'
import { Colors, Fonts } from '../style/inventory'

export const SApp = styled.div<FontSizeProps>(
  {
    fontFamily: Fonts.base,
    color: Colors.black,
    backgroundColor: Colors.background,
    minHeight: '100%',
  },
  fontSize,
)
