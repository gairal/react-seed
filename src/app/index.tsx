import React from 'react';

import { AppContextProvider } from './AppContextProvider';
import { Header } from './Header';
import { Main } from './Main';

export const App = () => (
  <AppContextProvider>
    <Header>React Seed</Header>
    <Main />
  </AppContextProvider>
);
