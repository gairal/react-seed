import React, { FC } from 'react';

import { AppContext } from './context';
import { useInitAppContext } from './useInitAppContext';

/**
 * simple main app state management using a React Context
 */
export const AppContextProvider: FC = ({ children }) => (
  <AppContext.Provider value={useInitAppContext()}>
    {children}
  </AppContext.Provider>
);
