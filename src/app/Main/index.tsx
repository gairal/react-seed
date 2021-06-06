import React from 'react';

import { useAppContext } from '../AppContextProvider/context';

import './Main.scss';

export const Main = () => {
  const { content } = useAppContext();

  return (
    <main>
      <p className="content">{content}</p>
    </main>
  );
};
