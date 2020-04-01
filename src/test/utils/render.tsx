import React from "react";
import { MockedProvider } from '@apollo/react-testing';
import { render } from "@testing-library/react"
import { mocks } from '../mocks'

const customRender = (ui: any, options: any = {}) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      { ui }
    </MockedProvider>,
    options
  )
}

export * from "@testing-library/react"

export { customRender as render }
