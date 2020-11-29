import React, { FC } from 'react';

import { Title } from './components/Title';
import { useApp } from './useApp';

export const App: FC = () => {
  const { state, changeTitle } = useApp();

  return (
    <div className="p-4">
      <Title>React Seed</Title>
      <main>{}</main>
    </div>
  );
};
