import React, { createContext, useContext, useReducer } from 'react';
//Data Layer
export const StateContext = createContext();

//Build A provider
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//How we use this inside a component
export const useStateValue = () => useContext(StateContext);
