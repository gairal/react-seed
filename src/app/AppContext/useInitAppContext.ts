import { useState } from 'react';
import { v4 } from 'uuid';

import type { AppContextState, Column } from './types';

export const useInitAppContext = (): AppContextState => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: v4(),
      title: 'col1',
      items: [
        { description: 'task1-1', id: v4(), title: 'task1-1' },
        { description: 'task1-1', id: v4(), title: 'task1-2' },
        { description: 'task1-1', id: v4(), title: 'task1-3' },
      ],
    },
    {
      id: v4(),
      title: 'col2',
      items: [
        { description: 'task1-1', id: v4(), title: 'task2-1' },
        { description: 'task1-1', id: v4(), title: 'task2-2' },
        { description: 'task1-1', id: v4(), title: 'task2-3' },
      ],
    },
    {
      id: v4(),
      title: 'col3',
      items: [
        { description: 'task1-1', id: v4(), title: 'task3-1' },
        { description: 'task1-1', id: v4(), title: 'task3-2' },
        { description: 'task1-1', id: v4(), title: 'task3-3' },
      ],
    },
  ]);

  const addTask = (colId: string, title: string) => {
    const col = columns.find(({ id }) => id === colId);
    if (!col) {
      return;
    }

    col.items.push({ description: '', id: v4(), title });

    setColumns([...columns]);
  };

  const removeTask = (colId: string, id: string) => {
    const newCols = [...columns];
    const col = newCols.find((column) => column.id === colId);
    if (!col) {
      return;
    }

    const idx = col.items.findIndex((cell) => cell.id === id);
    if (idx === undefined) {
      return;
    }

    col.items = [...col.items.slice(0, idx), ...col.items.slice(idx + 1)];
    setColumns(newCols);
  };

  const addColumn = (title: string) =>
    setColumns([...columns, { id: v4(), items: [], title }]);

  return { addColumn, addTask, columns, removeTask };
};
