import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import type { AppContextState } from './types';

export const useInitAppContext = (): AppContextState => {
  const [content, setContent] = useState([
    {
      id: uuid(),
      title: 'col 1',
      tasks: [
        { id: uuid(), title: 'task 1-1' },
        { id: uuid(), title: 'task 1-2' },
        { id: uuid(), title: 'task 1-3' },
      ],
    },
    {
      id: uuid(),
      title: 'col 2',
      tasks: [
        { id: uuid(), title: 'task 1-1' },
        { id: uuid(), title: 'task 1-2' },
        { id: uuid(), title: 'task 1-3' },
      ],
    },
    {
      id: uuid(),
      title: 'col 3',
      tasks: [
        { id: uuid(), title: 'task 1-1' },
        { id: uuid(), title: 'task 1-2' },
        { id: uuid(), title: 'task 1-3' },
      ],
    },
  ]);

  const addTaskToColumn = (columnId: string, taskTitle: string) => {
    const idx = content.findIndex(({ id }) => id === columnId);
    if (idx < 0) {
      return;
    }

    content[idx] = {
      ...content[idx],
      tasks: [...content[idx].tasks, { id: uuid(), title: taskTitle }],
    };
    setContent([...content]);
  };

  const removeTaskFromColumn = (columnId: string, taskId: string) => {
    const idx = content.findIndex(({ id }) => id === columnId);
    if (idx < 0) {
      return;
    }

    const col = content[idx];
    const taskIdx = col.tasks.findIndex(({ id }) => id === taskId);

    if (taskIdx < 0) {
      return;
    }

    col.tasks.splice(taskIdx, 1);
    setContent([...content]);
  };

  return {
    addTaskToColumn,
    content,
    removeTaskFromColumn,
  };
};
