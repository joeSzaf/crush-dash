// ADD_SESH
export const addSesh = (data) => ({
  type: 'ADD_SESH',
  sesh: data.sesh
})

export const getSeshesRequest = () => {
  return {
    type: 'GET_SESHES_REQUEST'
  }
}

export const getSeshesRequestSuccess = seshes => {
  return {
    type: 'GET_SESHES_REQUEST_SUCCESS',
    seshes
  }
}

export const getSeshes = (token) => {
  return (dispatch) => {
    dispatch(getSeshesRequest())

    return fetch('/seshes', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(seshes => {
      dispatch(getSeshesRequestSuccess(seshes))
    })
  }
}
