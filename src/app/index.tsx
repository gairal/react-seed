import React, { FC } from 'react';

import { Title } from './components/Title';
import { useApp } from './useApp';

export const App: FC = () => {
  const { title } = useApp();

  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};
