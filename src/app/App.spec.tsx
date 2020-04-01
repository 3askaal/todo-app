import React from 'react'
import { act, render } from '@testing-library/react'
import { customBeforeEach, customAfterEach, waitForData } from '../helpers/test'
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
