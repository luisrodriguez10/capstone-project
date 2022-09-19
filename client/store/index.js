import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import myDrinks from './mydrinks'
import myPantry from './myPantry'

const reducer = combineReducers({ auth, myDrinks, myPantry })
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './mydrinks'
export * from './myPantry'
