import React, { FC, ReactElement, MouseEvent, ReactNode } from 'react'
import { SButton } from './Button.styled'

export interface ButtonProps {
  children?: ReactNode
  onClick?: (event: MouseEvent) => void
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <SButton onClick={onClick} {...props}>
      {children}
    </SButton>
  )
}
