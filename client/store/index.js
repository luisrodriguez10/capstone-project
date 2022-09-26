import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import auth from "./auth";
import myDrinks from "./mydrinks";
import myPantry from "./myPantry";
import recipes from "./recipes";
import ingredients from "./ingredients";
import pantry from "./pantry";
import coordinates from "./coordinates";
import reviews from "./reviews";

const reducer = combineReducers({
  auth,
  myDrinks,
  recipes,
  ingredients,
  pantry,
  myPantry,
  coordinates,
  reviews
});
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./mydrinks";
export * from "./myPantry";
export * from "./recipes";
export * from "./ingredients";
export * from "./pantry";
export * from "./coordinates";
export * from "./reviews";
