import { ApolloLink } from 'apollo-link'
import ApolloClient, { DefaultOptions } from 'apollo-client'
import { httpLink } from './links/http'
import { cache } from './cache'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const link = ApolloLink.from([
  // errorLink,
  // authLink,
  // retryLink,
  httpLink,
])

export const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions,
})
