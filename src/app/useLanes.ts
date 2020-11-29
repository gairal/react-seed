import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Lane } from './types';

const getLaneById = (lanes: Lane[], laneId: string) =>
  lanes.find(({ id }) => id === laneId);

export const useLanes = () => {
  const [lanes, setLanes] = useState([
    {
      id: 'lane1',
      tasks: [
        { id: 'task11', title: 'task11' },
        { id: 'task12', title: 'task12' },
        { id: 'task13', title: 'task13' },
      ],
      title: 'lane1',
    },
    {
      id: 'lane2',
      tasks: [{ id: 'task21', title: 'task21' }],
      title: 'lane2',
    },
  ]);

  const addTask = (laneId: string, task: { title: string }) => {
    setLanes((currLanes) => {
      const lane = getLaneById(currLanes, laneId);
      if (lane) {
        lane.tasks.push({ ...task, id: uuidv4() });
      }

      return currLanes;
    });
  };

  const removeTask = (laneId: string, taskId: string) => {
    setLanes((currLanes) => {
      const lane = getLaneById(currLanes, laneId);
      if (lane) {
        lane.tasks = lane.tasks.filter(({ id }) => id !== taskId);
      }

      return currLanes;
    });
  };

  return { addTask, removeTask, lanes };
};
