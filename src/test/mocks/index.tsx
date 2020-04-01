import { TodosQuery } from '../../queries'
import {
  CreateMutation,
  CheckAllMutation,
  UncheckAllMutation,
  DeleteAllMutation,
  UpdateMutation,
  DeleteMutation
} from '../../mutations'

export const mocks = [
  {
    request: {
      query: TodosQuery
    },
    result: {
      data: {
        Todos: [
          { _id: '1', content: 'create todo app', completed: true, created: 'datetime' },
          { _id: '2', content: 'find new job', completed: false, created: 'datetime' }
        ]
      }
    }
  },
  {
    request: {
      query: UpdateMutation,
      variables: {
        _id: '2',
        data: {
          content: 'find awesome new job'
        }
      }
    },
    result: {
      data: {
        updateTodo: {
          _id: '2',
          content: 'find awesome new job',
          completed: false,
          created: 'datetime'
        }
      }
    }
  },
  {
    request: {
      query: DeleteMutation,
      variables: {
        _id: '2'
      }
    },
    result: {
      data: {
        deleteTodo: {
          _id: '2'
        }
      }
    }
  },
  {
    request: {
      query: CreateMutation,
      variables: {
        data: {
          content: 'New todo'
        }
      }
    },
    result: {
      data: {
        createTodo: {
          _id: '3',
          content: 'New Todo',
          completed: false,
          created: 'datetime'
        }
      }
    }
  },
  {
    request: {
      query: CheckAllMutation,
    },
    result: {
      data: {
        checkAll: true
      }
    }
  },
  {
    request: {
      query: UncheckAllMutation,
    },
    result: {
      data: {
        uncheckAll: true
      }
    }
  },
  {
    request: {
      query: DeleteAllMutation,
    },
    result: {
      data: {
        deleteAll: true
      }
    }
  }
]
