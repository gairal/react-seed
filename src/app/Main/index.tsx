import React from 'react';

import { useAppContext } from '../AppContext';
import { Column } from '../Column';

import './Main.scss';

export const Main = () => {
  const { data } = useAppContext();

  return (
    <main className="main">
      {data.map((col) => (
        <Column key={col.id} {...col} />
      ))}
    </main>
  );
};
