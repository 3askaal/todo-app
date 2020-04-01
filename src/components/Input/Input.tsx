import React, { FC, ReactElement, ChangeEvent } from 'react'
import { SInput } from './Input.styled'

export interface InputProps {
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  error?: string | null
}

export const Input: FC<InputProps> = ({
  value,
  defaultValue,
  onChange,
  error,
  ...props
}: InputProps): ReactElement => {
  return (
    <SInput
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      {...props}
    />
  )
}
