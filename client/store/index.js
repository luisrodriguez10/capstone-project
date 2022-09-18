import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import myDrinks from './mydrinks'
import recipes from './recipes'
import ingredients from './ingredients'
import pantry from './pantry'

const reducer = combineReducers({ auth, myDrinks, recipes, ingredients, pantry })
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './mydrinks'
export * from './recipes'
export * from './ingredients'
export * from './pantry'
