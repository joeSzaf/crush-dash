import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import connectorsReducer from '../reducers/connectors'
import seshesReducer from '../reducers/seshes'
import userReducer from '../reducers/user'

export default () => {
  const store = createStore(
    combineReducers({
      connectors: connectorsReducer,
      seshInformation: seshesReducer,
      user: userReducer
    }),
    applyMiddleware(thunk)
  )

  store.subscribe(() => {
  })

  return store
}
