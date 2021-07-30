import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/reducer";

const rootreducer = combineReducers({ reducer });
const middelware = [thunk];
const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(...middelware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;
