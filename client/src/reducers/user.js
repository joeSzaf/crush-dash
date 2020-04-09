const userReducerDefaultState = {
  name: 'loggedout',
  token: '',
  isFetching: false
}

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    // case 'GET_USER':
    //   const newSeshes = state.seshes.concat(action.sesh)
    //   return {...state, seshes: newSeshes}
    case 'LOG_IN_REQUEST':
      return {...state, isFetching: true}
    case 'LOG_IN_REQUEST_SUCCESS':
      return {...state,
        name: action.payload.user.user.name,
        token: action.payload.user.token,
        isFetching: false
      }
    default:
      return state
  }
}
