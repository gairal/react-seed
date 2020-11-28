import React, { ChangeEvent, useState } from 'react';
import { Lane as LaneType, Task as TaskType } from '../types';
import { Task } from './Task';

interface Props extends LaneType {
  onAddTask: (landId: string, task: Pick<TaskType, 'title'>) => void;
}

export const Lane = ({ id, onAddTask, title, tasks }: Props): JSX.Element => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleClick = () => {
    onAddTask(id, { title: newTaskTitle });
  };

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(currentTarget.value);
  };

  return (
    <div className="lane">
      <h2>{title}</h2>
      <div className="flex p-2">
        <input
          className="flex-1"
          onChange={handleChange}
          type="text"
          value={newTaskTitle}
        />
        <button
          className="add-task-button flex-1"
          disabled={!title}
          onClick={handleClick}
          type="button"
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};
