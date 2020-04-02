// connectors reducer
const connectorsReducerDefaultState = []

export default (state = connectorsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CONNECTOR':
      return [
        ...state,
        action.connector
      ]
    case 'REMOVE_CONNECTOR':
      console.log(action.id)
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_CONNECTOR':
      return state.map((connector) => {
        if (connector.id === action.id) {
          return {
            ...connector,
            ...action.updates,
            id: action.newId
          };
        } else {
          return connector
        }
      })
    default:
      return state
  }
}
