import React, { FC, ReactElement, ChangeEvent } from 'react'
import { Check as CheckIcon } from 'react-feather'
import {
  SCheckbox,
  SCheckboxInput,
  SCheckboxIndicator,
} from './Checkbox.styled'

export interface CheckboxProps {
  checked: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  ...props
}: CheckboxProps): ReactElement => {
  return (
    <SCheckbox checked={checked}>
      <SCheckboxInput
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <SCheckboxIndicator>
        <CheckIcon />
      </SCheckboxIndicator>
    </SCheckbox>
  )
}
