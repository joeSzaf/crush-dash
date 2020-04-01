import { createStore, combineReducers } from 'redux'
import connectorsReducer from '../reducers/connectors'
import crushedReducer from '../reducers/crushed'

export default () => {
  const store = createStore(
    combineReducers({
      connectors: connectorsReducer,
      crushed: crushedReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(() => {
  })

  return store
}
