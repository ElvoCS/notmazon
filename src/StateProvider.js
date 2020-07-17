//setting up data layer
//we need this to track the basket

import { createContext, useContext, useReducer } from "react";
//this is the data layer
export const StateContext = createContext();
//build a provider
