import React, { FC } from 'react';
import { LaneComponent } from './components/Lane';

import { Title } from './components/Title';
import { useLanes } from './useLanes';

export const App: FC = () => {
  const { lanes, onAddTask, onRemoveTask } = useLanes();

  return (
    <>
      <Title>React Seed</Title>
      <hr className="border" />
      <main className="flex flex-col md:flex-row p-2">
        {lanes.map((lane) => (
          <LaneComponent
            key={lane.id}
            onAddTask={onAddTask}
            onRemoveTask={onRemoveTask}
            {...lane}
          />
        ))}
      </main>
    </>
  );
};
