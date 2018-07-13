import { createStore, combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import auth from './auth'

const reducer = combineReducers({
    form,
    auth
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
