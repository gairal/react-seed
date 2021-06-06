import { createContext, useContext } from 'react';

export interface AppContextState {
  // TODO
  content: string;
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
