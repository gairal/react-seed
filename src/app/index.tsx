import React from 'react';

import { AppContext } from './AppContext';
import { useInitAppContext } from './AppContext/useInitAppContext';
import { Header } from './Header';
import { Main } from './Main';

export const App = () => (
  <AppContext.Provider value={useInitAppContext()}>
    <Header>React Seed</Header>
    <Main />
  </AppContext.Provider>
);
