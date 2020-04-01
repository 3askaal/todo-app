import React from 'react'
import {
  render,
  act,
  customBeforeEach,
  customAfterEach,
  waitForData,
} from '../test/utils'
import App from './App'

let container: any = null

beforeEach(() => {
  container = customBeforeEach()
})

afterEach(() => {
  customAfterEach(container)
})

describe('MainView', () => {
  it('renders', async () => {
    const { getByTestId } = render(<App />)

    await act(async () => {
      await waitForData()
    })

    expect(getByTestId('app')).toBeDefined()
  })
})
