import React from 'react';

import { useAppContext } from '../AppContext';

import './Main.scss';

export const Main = () => {
  const { content } = useAppContext();

  return (
    <main className="main">
      <p>{content}</p>
    </main>
  );
};
