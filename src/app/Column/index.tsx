import React, { ChangeEvent, useState } from 'react';

import { useAppContext } from '../AppContext';
import { Col } from '../AppContext/types';
import { Task } from '../Task';

import './Column.scss';

export const Column = ({ id, title, tasks }: Col) => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTaskToColumn } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(event.currentTarget.value);
  const handleClick = () => {
    if (!taskTitle) {
      return;
    }
    addTaskToColumn(id, taskTitle);
    setTaskTitle('');
  };

  return (
    <section className="column">
      <header>{title}</header>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} {...task} colId={id} />
        ))}
      </div>

      <form className="flex">
        <input
          className="border"
          onChange={handleChange}
          type="text"
          value={taskTitle}
        />
        <button onClick={handleClick} type="button">
          add
        </button>
      </form>
    </section>
  );
};
