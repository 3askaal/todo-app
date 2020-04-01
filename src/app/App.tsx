import React, { FC, ReactElement } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory } from 'history'

import { MainView } from '../views'
import { GlobalStyle } from '../style'
import { apolloClient } from '../apollo'

import 'normalize.css/normalize.css'
import 'reset-css/reset.css'
import './fonts.css'

import { SApp } from './App.styled'
import { Wrapper } from '../components'

export const history = createBrowserHistory()

const App: FC = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <SApp fontSize={[14, 16]} data-testid="app">
        <ApolloProvider client={apolloClient}>
          <Router history={history}>
            <Wrapper>
              <Switch>
                <Route path="/">
                  <MainView />
                </Route>
              </Switch>
            </Wrapper>
          </Router>
        </ApolloProvider>
      </SApp>
    </>
  )
}

export default App
