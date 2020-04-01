import { HttpLink } from 'apollo-link-http'
import { API_URL } from '../../config'

export const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
})
