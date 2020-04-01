import { Reducer } from 'react'
import { TTodo, TTodoInput } from '../../../shared/types/todo.d'

export const initialTodoState = []

type TAction =
  | { type: 'set'; value: TTodo[] }
  | { type: 'check:all' }
  | { type: 'uncheck:all' }
  | { type: 'delete:all' }
  | { type: 'update:one'; _id: string; update: TTodoInput }
  | { type: 'delete:one'; _id: string }

export const TodoReducer: Reducer<TTodo[], TAction> = (state, action) => {
  switch (action.type) {
    case 'set': {
      return action.value
    }

    case 'check:all': {
      const newTodos: TTodo[] = [...state].map((todo: TTodo) => {
        return {
          ...todo,
          completed: true,
        }
      })

      return newTodos
    }

    case 'uncheck:all': {
      const newTodos: TTodo[] = [...state].map((todo: TTodo) => {
        return {
          ...todo,
          completed: false,
        }
      })

      return newTodos
    }

    case 'delete:all': {
      return []
    }

    case 'update:one': {
      const newTodos: TTodo[] = [...state].map((todo: TTodo) => {
        return {
          ...todo,
          ...(todo._id === action._id && action.update),
        }
      })

      return newTodos
    }

    case 'delete:one': {
      const newTodos: TTodo[] = [...state].filter((todo: TTodo) => todo._id !== action._id)

      return newTodos
    }

    default: {
      throw new Error('Type undefined or does not exist.')
    }
  }
}
