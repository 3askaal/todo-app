import React, { FC, ReactNode, ReactElement } from 'react'
import { SmallText } from './Text.styled'

export interface TextProps {
  children?: ReactNode
}

export const Text: FC<TextProps> = ({ children }: TextProps): ReactElement => {
  return <SmallText>{children}</SmallText>
}
