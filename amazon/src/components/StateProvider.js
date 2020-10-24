import React, { createContext, useContext, useReducer } from 'react';
//Data Layer
export const StateContext = createContext();
//Build A provider
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);
