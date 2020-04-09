// seshes reducer
const seshReducerDefaultState = {
  seshes: [],
  isFetching: false
}

export default (state = seshReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SESH':
      const newSeshes = state.seshes.concat(action.sesh)
      return {...state, seshes: newSeshes}
    case 'GET_SESHES_REQUEST':
      return {...state, isFetching: true}
    case 'GET_SESHES_REQUEST_SUCCESS':
      return {...state,
        seshes: action.seshes,
        isFetching: false
      }

    // case 'REMOVE_CONNECTOR':
    //   console.log(action.id)
    //   return state.filter(({ id }) => id !== action.id)
    // case 'EDIT_CONNECTOR':
    //   return state.map((connector) => {
    //     if (connector.id === action.id) {
    //       return {
    //         ...connector,
    //         ...action.updates,
    //         id: action.newId
    //       };
    //     } else {
    //       return connector
    //     }
    //   })
    default:
      return state
  }
}
