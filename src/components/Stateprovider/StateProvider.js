import React, { createContext, useContext, useReducer } from "react";

// setup layer

// track it in basket

// this is data layer
export const StateContext = createContext({});

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use inside of a component:
export const useStateValue = () => useContext(StateContext);
