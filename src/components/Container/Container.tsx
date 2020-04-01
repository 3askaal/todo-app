import React, { FC, ReactElement, ReactNode } from 'react'
import { SContainer } from './Container.styled'

export interface ContainerProps {
  children?: ReactNode
}

export const Container: FC<ContainerProps> = ({
  children,
}: ContainerProps): ReactElement => {
  return <SContainer>{children}</SContainer>
}
