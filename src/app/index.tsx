import React, { FC } from 'react';
import { LaneComponent } from './components/Lane';

import { Title } from './components/Title';
import { useApp } from './useApp';

export const App: FC = () => {
  const {
    addTask,
    state: { lanes },
  } = useApp();

  return (
    <>
      <Title>React Seed</Title>
      <main className="main">
        {lanes.map((lane) => (
          <LaneComponent key={lane.id} {...lane} onAddTask={addTask} />
        ))}
      </main>
    </>
  );
};
