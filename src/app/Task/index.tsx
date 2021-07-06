import React from 'react';

import { useAppContext } from '../AppContext';
import { Cell } from '../AppContext/types';

import './Task.scss';

interface Props extends Cell {
  colId: string;
}

export const Task = ({ colId, id, title }: Props) => {
  const { removeTaskFromColumn } = useAppContext();
  const handleClick = () => removeTaskFromColumn(colId, id);

  return (
    <div className="task flex justify-between">
      {title}
      <button onClick={handleClick} type="button">
        X
      </button>
    </div>
  );
};
