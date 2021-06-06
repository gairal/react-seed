import React from 'react';

import { useAppContext } from '../AppContextProvider/context';
import { Cel } from '../types';

import './Cell.scss';

interface Props extends Cel {
  colId: string;
}

export const Cell = ({ colId, id, title }: Props) => {
  const { removeItem } = useAppContext();

  const handleClick = () => removeItem(colId, id);

  return (
    <div className="cell">
      <header className="flex justify-end">
        <button onClick={handleClick} type="button">
          X
        </button>
      </header>
      <div>{title}</div>
    </div>
  );
};
