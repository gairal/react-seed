import React, { FC } from 'react';
import { LaneComponent } from './components/Lane';

import { Title } from './components/Title';
import { useLanes } from './useLanes';

export const App: FC = () => {
  const { addTask, removeTask, lanes } = useLanes();

  return (
    <>
      <Title>React Seed</Title>
      <main className="main">
        {lanes.map((lane) => (
          <LaneComponent
            key={lane.id}
            {...lane}
            onAddTask={addTask}
            onRemoveTask={removeTask}
          />
        ))}
      </main>
    </>
  );
};
