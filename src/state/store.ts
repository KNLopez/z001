import { createStore, combineReducers } from "redux";
import taskReducer from "./reducers";

const reducers = combineReducers({ tasks: taskReducer });

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export { store };
