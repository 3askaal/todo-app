import React, { FC, ReactElement, ReactNode } from 'react'
import { SSpacer } from './Spacer.styled'

export interface SpacerProps {
  size?: string
  direction?: 'row' | 'column'
  children?: ReactNode
}

export const Spacer: FC<SpacerProps> = ({
  size,
  direction,
  children,
}: SpacerProps): ReactElement => {
  return (
    <SSpacer size={size} direction={direction}>
      {children}
    </SSpacer>
  )
}
