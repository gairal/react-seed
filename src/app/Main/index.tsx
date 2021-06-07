import React, { ChangeEvent, useState } from 'react';

import { useAppContext } from '../AppContext';
import { Col } from '../Col';

import './Main.scss';

export const Main = () => {
  const [colTitle, setColTitle] = useState('');
  const { addColumn } = useAppContext();

  const handleOnChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setColTitle(currentTarget.value);
  };

  const handleClick = () => {
    addColumn(colTitle);
    setColTitle('');
  };

  const { columns } = useAppContext();

  return (
    <main>
      <div>
        <form action="">
          <input
            className="border"
            onChange={handleOnChange}
            type="text"
            value={colTitle}
          />
          <button
            className="border"
            disabled={!colTitle}
            onClick={handleClick}
            type="button"
          >
            add task
          </button>
        </form>
      </div>

      <div className="main">
        {columns.map((col) => (
          <Col key={col.id} {...col} />
        ))}
      </div>
    </main>
  );
};
