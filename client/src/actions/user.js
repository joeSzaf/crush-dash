// handle log in request
export const logInRequest = () => {
  return {
    type: 'LOG_IN_REQUEST'
  }
}

export const logInRequestSuccess = user => {
  return {
    type: 'LOG_IN_REQUEST_SUCCESS',
    payload: { user }
  }
}

export const logInUser = (payload) => {
  return (dispatch) => {
    dispatch(logInRequest())

    return fetch('/users/login', {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {"content-type": "application/json"},
    })
    .then(response => response.json())
    .then(response => {
      dispatch(logInRequestSuccess(response))
    })
    .catch(error => {
      console.log('error')
    })
  }
}
