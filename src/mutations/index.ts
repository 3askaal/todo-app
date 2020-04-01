import { loader } from 'graphql.macro'

const CheckAllMutation = loader('./CheckAllMutation.gql')
const CreateMutation = loader('./CreateMutation.gql')
const DeleteAllMutation = loader('./DeleteAllMutation.gql')
const DeleteMutation = loader('./DeleteMutation.gql')
const UncheckAllMutation = loader('./UncheckAllMutation.gql')
const UpdateMutation = loader('./UpdateMutation.gql')

export { CheckAllMutation, CreateMutation, DeleteAllMutation, DeleteMutation, UncheckAllMutation, UpdateMutation }
