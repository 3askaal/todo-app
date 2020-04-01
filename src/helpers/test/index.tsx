import { unmountComponentAtNode } from 'react-dom'

export const customBeforeEach = () => {
  let container = document.createElement('div')
  document.body.appendChild(container)

  return container
}

export const customAfterEach = (container: any) => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
}

export const waitForData = (time: number = 0) => new Promise(res => setTimeout(res, time))
