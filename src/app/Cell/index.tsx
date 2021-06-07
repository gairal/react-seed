import React from 'react';

import { useAppContext } from '../AppContext';
import { Task } from '../AppContext/types';

import './Cell.css';

interface Props extends Task {
  coldId: string;
}

export const Cell = ({ coldId, description, id, title }: Props) => {
  const { removeTask } = useAppContext();

  const handleClick = () => removeTask(coldId, id);

  return (
    <div className="cell">
      <div className="cell-header relative">
        {title}
        <button
          className="absolute right-0 top-0 p-1 text-white bg-red-500"
          onClick={handleClick}
          type="button"
        >
          x
        </button>
      </div>
      <div className="cell-content">{description}</div>
    </div>
  );
};
