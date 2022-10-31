import { createContext, useContext } from 'react';

import type { AppContextState } from './types';

/**
 * casting the default value to AppContextState
 * We're gonna assume the context is always set with the required values
 */
export const AppContext = createContext<AppContextState>({} as AppContextState);

/**
 * helper hook to access the app context from any component
 */
export const useAppContext = () => useContext(AppContext);
