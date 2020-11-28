import React, { FC } from 'react';
import { Lane } from './components/Lane';

import { Title } from './components/Title';
import { useApp } from './useApp';

export const App: FC = () => {
  const { state, addTask } = useApp();

  return (
    <main className="main">
      <Title>Trello Like</Title>
      <div className="laneContainer">
        {state.lanes.map((lane) => (
          <Lane onAddTask={addTask} key={lane.id} {...lane} />
        ))}
      </div>
    </main>
  );
};
