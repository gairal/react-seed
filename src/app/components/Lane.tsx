import { Lane } from '@app/types';
import React, { ChangeEvent, useState } from 'react';
import { TaskComponent } from './Task';

interface Props extends Lane {
  onAddTask: (laneId: string, task: { title: string }) => void;
  onRemoveTask: (laneId: string, taskId: string) => void;
}

export const LaneComponent = ({
  id,
  onAddTask,
  onRemoveTask,
  title,
  tasks,
}: Props) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(currentTarget.value);
  };

  const handleSubmit = () => {
    setTaskTitle('');
    onAddTask(id, { title: taskTitle });
  };

  const handleRemoveTask = (taskId: string) => onRemoveTask(id, taskId);

  return (
    <div className="lane">
      <h2 className="lane-title">{title}</h2>
      <div className="flex bg-gray-200 p-2 mb-2">
        <input
          className="flex-1"
          type="text"
          value={taskTitle}
          onChange={handleChange}
        />
        <button
          className={`flex-1 ${!taskTitle && 'text-gray-500'}`}
          disabled={!taskTitle}
          type="button"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          {...task}
          onRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  );
};
