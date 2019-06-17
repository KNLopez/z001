import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext({});

interface StateProviderProps {
  reducer: any;
  initialState: any;
}

export const StateProvider: React.FunctionComponent<StateProviderProps> = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
