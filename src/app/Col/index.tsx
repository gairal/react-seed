import React, { ChangeEvent, useState } from 'react';

import { useAppContext } from '../AppContext';
import { Column } from '../AppContext/types';
import { Cell } from '../Cell';

import './Col.css';

export const Col = ({ id, items, title }: Column) => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useAppContext();

  const handleOnChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(currentTarget.value);
  };
  const handleClick = () => {
    addTask(id, taskTitle);
    setTaskTitle('');
  };

  return (
    <section key={id} className="col">
      <header className="col-header">{title}</header>
      <main className="col-content">
        {items.map((cell) => (
          <Cell key={cell.id} coldId={id} {...cell} />
        ))}
      </main>
      <footer className="flex justify-between items-center p-4">
        <input
          className="border"
          onChange={handleOnChange}
          type="text"
          value={taskTitle}
        />
        <button
          className="border"
          disabled={!taskTitle}
          onClick={handleClick}
          type="button"
        >
          add task
        </button>
      </footer>
    </section>
  );
};
