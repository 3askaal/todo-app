import React, { useState, useEffect, FC, useReducer, FormEvent } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import { useDebouncedCallback } from 'use-debounce/lib'
import { Plus as PlusIcon } from 'react-feather'
import { some } from 'lodash'
import { TodosQuery } from 'queries'
import { Todo, Container, Spacer, Input, Button } from 'components'
import { TodoReducer, initialTodoState } from 'context'
import {
  CheckAllMutation,
  UncheckAllMutation,
  DeleteAllMutation,
  CreateMutation,
  DeleteMutation,
  UpdateMutation,
} from '../../mutations'
import { SIndexViewCreate, SIndexViewError, SIndexViewOptions } from './MainView.styled'
import { TTodo, TMutation, TTodoInput } from '../../../../shared/types/todo.d'

export const MainView: FC<{}> = () => {
  const [runTodosQuery, { data: { Todos = [] } = {} }] = useLazyQuery(TodosQuery)
  const [todos, dispatch] = useReducer(TodoReducer, initialTodoState)
  const [newContent, setNewContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [createMutation, { data: createData }] = useMutation<TMutation>(CreateMutation)
  const [updateTodoMutation] = useMutation<TMutation>(UpdateMutation)
  const [deleteTodoMutation] = useMutation<TMutation>(DeleteMutation)
  const [checkAllMutation] = useMutation<TMutation>(CheckAllMutation)
  const [uncheckAllMutation] = useMutation<TMutation>(UncheckAllMutation)
  const [deleteAllMutation] = useMutation<TMutation>(DeleteAllMutation)

  useEffect(() => {
    runTodosQuery()
  }, [runTodosQuery])

  useEffect(() => {
    if (Todos?.length) {
      dispatch({ type: 'set', value: Todos })
    }
  }, [Todos])

  useEffect(() => {
    if (createData?.createTodo) {
      dispatch({ type: 'set', value: [...todos, createData.createTodo] })
    }
  }, [createData])

  useEffect(() => {
    if (error) {
      setError(null)
    }
  }, [newContent])

  function onCreate(event: FormEvent): void {
    event.preventDefault()

    if (!newContent) {
      setError('Content field can not be empty')
      return
    }

    createMutation({
      variables: {
        data: {
          content: newContent,
        },
      },
    })

    setNewContent('')
  }

  const [debouncedUpdate] = useDebouncedCallback(async (_id: string, update: TTodoInput) => {
    await updateTodoMutation({
      variables: {
        _id,
        data: update,
      },
    })
  }, 500)

  async function onUpdate(_id: string, update: TTodoInput): Promise<void> {
    dispatch({ type: 'update:one', _id, update })
    await debouncedUpdate(_id, update)
  }

  async function onDelete(_id: string): Promise<void> {
    dispatch({ type: 'delete:one', _id })
    await deleteTodoMutation({
      variables: {
        _id,
      },
    })
  }

  async function onCheckAll(): Promise<void> {
    dispatch({ type: 'check:all' })
    await checkAllMutation()
  }

  async function onUncheckAll(): Promise<void> {
    dispatch({ type: 'uncheck:all' })
    await uncheckAllMutation()
  }

  async function onDeleteAll(): Promise<void> {
    dispatch({ type: 'delete:all' })
    await deleteAllMutation()
  }

  return (
    <Container>
      <Spacer>
        <SIndexViewCreate data-testid="main-create">
          <form onSubmit={onCreate} data-testid="main-create-form">
            <Input
              value={newContent}
              onChange={event => setNewContent(event.target.value)}
              error={error}
              data-testid="main-create-form-input"
            />
          </form>
          <Button onClick={onCreate} data-testid="main-create-button">
            <PlusIcon />
          </Button>
        </SIndexViewCreate>
        {error ? <SIndexViewError data-testid="main-create-error">{error}</SIndexViewError> : null}
        <Spacer size="s" data-testid="main-list">
          {todos.map(({ _id, content, completed }: TTodo) => (
            <Todo
              content={content ?? ''}
              completed={completed ?? false}
              key={_id}
              onUpdate={(update: TTodoInput) => onUpdate(_id, update)}
              onDelete={() => onDelete(_id)}
            />
          ))}
        </Spacer>
        {todos.length ? (
          <SIndexViewOptions data-testid="main-options">
            {some(todos, { completed: false }) && (
              <Button data-testid="main-options-checkall" onClick={onCheckAll}>
                Check All
              </Button>
            )}
            {some(todos, { completed: true }) && (
              <Button data-testid="main-options-uncheckall" onClick={onUncheckAll}>
                Uncheck All
              </Button>
            )}
            <Button data-testid="main-options-deleteall" onClick={onDeleteAll}>
              Delete All
            </Button>
          </SIndexViewOptions>
        ) : null}
      </Spacer>
    </Container>
  )
}

export default MainView
