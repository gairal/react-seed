import React, { FC } from 'react';

import { Lane } from './components/Lane';
import { useTasks } from './useTasks';

export const App: FC = () => {
  const { lanes } = useTasks();

  return (
    <div className="container wrapper">
      {lanes.map(({ title, ...rest }) => (
        <Lane key={title} title={title} {...rest} />
      ))}
    </div>
  );
};
