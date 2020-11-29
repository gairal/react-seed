import { MainState } from './types';

export const DEFAULT_STATE: MainState = {
  lanes: [
    {
      id: 'lane1',
      tasks: [
        { id: 'task11', title: 'task11' },
        { id: 'task12', title: 'task12' },
        { id: 'task13', title: 'task13' },
      ],
      title: 'lane1',
    },
    { id: 'lane2', tasks: [{ id: 'task21', title: 'task21' }], title: 'lane2' },
  ],
  title: 'React Seed',
};
