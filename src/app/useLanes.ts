import { useState } from 'react';
import { v4 } from 'uuid';

import { Lane } from './components/Lane';
import { Task } from './components/Task';

export const useLanes = () => {
  const [lanes, setLanes] = useState<Lane[]>([
    {
      color: 'blue',
      id: v4(),
      title: 'lane1',
      tasks: [
        { id: v4(), title: 'task11', description: 'task11' },
        { id: v4(), title: 'task12', description: 'task12' },
        { id: v4(), title: 'task12', description: 'task12' },
        { id: v4(), title: 'task12', description: 'task12' },
      ],
    },
    {
      color: 'red',
      id: v4(),
      title: 'lane2',
      tasks: [
        { id: v4(), title: 'task11', description: 'task11' },
        { id: v4(), title: 'task12', description: 'task12' },
        { id: v4(), title: 'task12', description: 'task12' },
      ],
    },
    {
      color: 'green',
      id: v4(),
      title: 'lane3',
      tasks: [
        { id: v4(), title: 'task11', description: 'task11' },
        { id: v4(), title: 'task12', description: 'task12' },
        { id: v4(), title: 'task12', description: 'task12' },
        { id: v4(), title: 'task12', description: 'task12' },
      ],
    },
  ]);

  const onAddTask = (laneId: string, task: Partial<Task>) => {
    const laneIndex = lanes.findIndex(({ id }) => id === laneId);
    if (laneIndex < 0) return;

    const newLane = [...lanes];
    newLane[laneIndex].tasks.push({ ...task, id: v4() } as Task);

    setLanes(newLane);
  };

  const onRemoveTask = (laneId: string, taskId: string) => {
    const laneIndex = lanes.findIndex(({ id }) => id === laneId);

    if (laneIndex < 0) return;

    const lane = lanes[laneIndex];

    const newLane = [...lanes];
    newLane[laneIndex] = {
      ...lane,
      tasks: lane.tasks.filter(({ id }) => id !== taskId),
    };
    setLanes(newLane);
  };

  return { lanes, onAddTask, onRemoveTask };
};
