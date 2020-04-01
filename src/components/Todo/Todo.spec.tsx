import React from 'react'
import { Todo } from './Todo'
import {
  render,
  act,
  fireEvent,
  customBeforeEach,
  customAfterEach,
  waitForData,
} from '../../test/utils'

let container: any = null

beforeEach(() => {
  container = customBeforeEach()
})

afterEach(() => {
  customAfterEach(container)
})

describe('Todo', () => {
  it('runs', async () => {
    const tree = render(<Todo content="find new job" completed={false} />)

    await act(async () => {
      await waitForData()
    })

    expect(tree).toMatchSnapshot()
  })

  it('updates todo', async () => {
    const onUpdate = jest.fn()

    const { getByTestId } = render(
      <Todo content="find new job" completed={false} onUpdate={onUpdate} />,
    )

    await act(async () => {
      await waitForData()
    })

    const todoContentInput: any = getByTestId('todo-content-input')
    fireEvent.change(todoContentInput, {
      target: { value: 'find awesome new job' },
    })

    const todoCompletedInput: any = getByTestId('todo-completed-input')
    fireEvent.click(todoCompletedInput)

    await act(async () => {
      await waitForData(500)
    })

    expect(onUpdate).toHaveBeenCalledTimes(2)
  })
})
