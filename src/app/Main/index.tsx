import React from 'react';

import { useAppContext } from '../AppContextProvider/context';
import { Column } from '../Column';

import './Main.scss';

export const Main = () => {
  const { data } = useAppContext();

  return (
    <main>
      {data.map((col) => (
        <Column key={col.id} {...col} />
      ))}
    </main>
  );
};
