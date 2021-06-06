import { createContext, useContext } from 'react';

import { Col } from '../types';

export interface AppContextState {
  addItem: (colId: string, title: string) => void;
  data: Col[];
  removeItem: (colId: string, cellId: string) => void;
}

/**
 * casting the default value to AppContextState
 * We're gonna assume that the context is always set with the required values
 */
export const AppContext = createContext<AppContextState>({} as AppContextState);

/**
 * helper hook to access the app context from any component
 */
export const useAppContext = () => useContext(AppContext);
