import React, { FC } from 'react';
import { Column } from './Column';

import { Title } from './Title';
import { useTrello } from './useTrello';
import { TrelloContext } from './context';
import './index.css';

export const App: FC = () => {
  const [data, context] = useTrello();

  return (
    <TrelloContext.Provider value={context}>
      <header>
        <Title>React Seed</Title>
      </header>
      <main className="main">
        {data.map((col) => (
          <Column {...col} />
        ))}
      </main>
    </TrelloContext.Provider>
  );
};
