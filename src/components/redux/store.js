import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import taskReducer from "./reducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  //usuaruis: usuariosReducer,
  //productos: productosReducer....
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk))
  );
  return store;
}
