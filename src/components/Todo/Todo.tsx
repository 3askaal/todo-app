import React, { FC, ReactElement } from 'react'
import { X as XIcon } from 'react-feather'
import { STodo, STodoCheckbox, STodoInput, STodoButton } from './Todo.styled'
import { Checkbox, Input, Button } from '..'

export interface TodoProps {
  content: string
  completed: boolean
  onUpdate: (update: object) => void
  onDelete: () => void
}

export const Todo: FC<TodoProps> = ({
  content,
  completed,
  onUpdate,
  onDelete,
}: TodoProps): ReactElement => {
  return (
    <STodo data-testid="todo">
      <STodoCheckbox data-testid="todo-completed">
        <Checkbox
          checked={completed}
          onChange={event => onUpdate({ completed: event.target.checked })}
          data-testid="todo-completed-input"
        />
      </STodoCheckbox>
      <STodoInput data-testid="todo-content">
        <Input
          value={content}
          onChange={event => onUpdate({ content: event.target.value })}
          data-testid="todo-content-input"
        />
      </STodoInput>
      <STodoButton>
        <Button onClick={onDelete} data-testid="todo-button">
          <XIcon />
        </Button>
      </STodoButton>
    </STodo>
  )
}
