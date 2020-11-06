import React, { FC } from 'react';

import { Lane } from './components/Lane';
import { useApp } from './useApp';

export const App: FC = () => {
  const { lanes } = useApp();

  return (
    <div className="container wrapper">
      {lanes.map(({ title, ...rest }) => (
        <Lane key={title} title={title} {...rest} />
      ))}
    </div>
  );
};
