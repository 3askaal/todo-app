import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  body > div,
  body > div > div {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 1em;
    height: 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea:focus,
  input:focus,
  button:focus {
    outline: none;
  }
  
  svg {
    display: block;
    stroke-width: 3;
  }

  small {
    font-size: 0.9em;
  }
`
