import React from 'react'
import { MainView } from './MainView'
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

describe('MainView', () => {
  it('runs', async () => {
    const tree = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    expect(tree).toMatchSnapshot()
  })

  it('creates todo', async () => {
    const { getByTestId, getAllByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    const createFormInput: any = getByTestId('main-create-form-input')
    fireEvent.change(createFormInput, { target: { value: 'New todo' } })

    const createFormButton: any = getByTestId('main-create-button')
    fireEvent.click(createFormButton)

    await act(async () => {
      await waitForData()
    })

    expect(getAllByTestId('todo').length).toBe(3)
  })

  it('creates todo (fails)', async () => {
    const { getByTestId, queryByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    const createFormButton: any = getByTestId('main-create-button')
    fireEvent.click(createFormButton)

    await act(async () => {
      await waitForData()
    })

    expect(getByTestId('main-create-error')).toBeDefined()

    const createFormInput: any = getByTestId('main-create-form-input')
    fireEvent.change(createFormInput, { target: { value: 'New todo' } })

    expect(queryByTestId('main-create-error')).toBeNull()
  })

  it('updates todo', async () => {
    const { getAllByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    const todoToUpdate: any = getAllByTestId('todo-content-input')[1]
    expect(todoToUpdate.value).toBe('find new job')

    fireEvent.change(todoToUpdate, {
      target: { value: 'find awesome new job' },
    })

    await act(async () => {
      await waitForData(1000)
    })

    expect(todoToUpdate.value).toBe('find awesome new job')
  })

  it('removes todo', async () => {
    const { getAllByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    expect(getAllByTestId('todo').length).toBe(2)

    const todoToRemoveButton: any = getAllByTestId('todo-button')[1]
    fireEvent.click(todoToRemoveButton)

    await act(async () => {
      await waitForData()
    })

    expect(getAllByTestId('todo').length).toBe(1)
  })

  it('check all', async () => {
    const { getByTestId, queryByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    const checkAllButton: any = getByTestId('main-options-checkall')
    fireEvent.click(checkAllButton)

    await act(async () => {
      await waitForData()
    })

    expect(queryByTestId('main-options-checkall')).toBeNull()
  })

  it('uncheck all', async () => {
    const { getByTestId, queryByTestId } = render(<MainView />)

    await act(async () => {
      await waitForData()
    })

    const uncheckAllButton: any = getByTestId('main-options-uncheckall')
    fireEvent.click(uncheckAllButton)

    await act(async () => {
      await waitForData()
    })

    expect(queryByTestId('main-options-uncheckall')).toBeNull()
  })

  it('delete all', async () => {
    const { getByTestId, queryByTestId, queryAllByTestId } = render(
      <MainView />,
    )

    await act(async () => {
      await waitForData()
    })

    const deleteAllButton: any = getByTestId('main-options-deleteall')
    fireEvent.click(deleteAllButton)

    await act(async () => {
      await waitForData()
    })

    expect(queryByTestId('main-options-deleteall')).toBeNull()
    expect(queryAllByTestId('todo').length).toBe(0)
  })
})
