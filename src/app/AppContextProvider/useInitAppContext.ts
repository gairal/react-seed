import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Col } from '../types';
import { AppContextState } from './context';

export const useInitAppContext = (): AppContextState => {
  const [cols] = useState<Col[]>([
    {
      id: uuid(),
      title: 'column1',
      items: [
        {
          id: uuid(),
          title: 'items1',
        },
        {
          id: uuid(),
          title: 'items2',
        },
        {
          id: uuid(),
          title: 'items3',
        },
        {
          id: uuid(),
          title: 'items4',
        },
      ],
    },
    {
      id: uuid(),
      title: 'column2',
      items: [
        {
          id: uuid(),
          title: 'items1',
        },
      ],
    },
    {
      id: uuid(),
      title: 'column3',
      items: [
        {
          id: uuid(),
          title: 'items1',
        },
      ],
    },
    {
      id: uuid(),
      title: 'column4',
      items: [
        {
          id: uuid(),
          title: 'items1',
        },
      ],
    },
  ]);

  // const addColumn = () => {};
  const addItem = (coldId: string, title: string) => {
    console.log(coldId, title);
  };
  const removeItem = (coldId: string, id: string) => {
    console.log(coldId, id);
  };

  return { addItem, data: cols, removeItem };
};
