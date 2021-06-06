import React from 'react';
import { useTrelloContext } from '../state/context';
import { Cel } from '../types';

import './Cell.css';

interface Props extends Cel {
  colId: string;
}

export const Cell = ({ colId, id, title }: Props) => {
  const { removeItem } = useTrelloContext();

  const handleClick = () => removeItem(colId, id);

  return (
    <div className="cell">
      <header className="flex justify-end">
        <button type="button" onClick={handleClick}>
          X
        </button>
      </header>
      <div>{title}</div>
    </div>
  );
};
