import { combineReducers, createStore } from "redux";
import { formBuilderReducer } from "./ducks/formBuilder";
import taskReducer from "./reducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
  formBuilderState: formBuilderReducer,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export { store };
