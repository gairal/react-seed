import React from 'react';

import { useAppContext } from '../AppContext';
import { Column } from '../Column';

import './Main.scss';

export const Main = () => {
  const { content } = useAppContext();

  return (
    <main className="main">
      {content.map((column) => (
        <Column key={column.id} {...column} />
      ))}
    </main>
  );
};
