import React, { FC, ReactElement, ReactNode } from 'react'
import { SWrapper } from './Wrapper.styled'

export interface WrapperProps {
  children?: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }: WrapperProps): ReactElement => {
  return <SWrapper>{children}</SWrapper>
}
