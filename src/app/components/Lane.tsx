import React, { ChangeEvent, useState } from 'react';
import { Task, TaskComponent } from './Task';

export interface Lane {
  color: string;
  id: string;
  tasks: Task[];
  title: string;
}

interface Props extends Lane {
  onAddTask: (laneId: string, task: Partial<Task>) => void;
  onRemoveTask: (laneId: string, taskId: string) => void;
}

export const LaneComponent = ({
  color,
  id,
  onAddTask,
  onRemoveTask,
  tasks,
  title,
}: Props) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [, setTaskDescription] = useState('');

  const handleRemoveTask = (taskId: string) => {
    onRemoveTask(id, taskId);
  };

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(currentTarget.value);

  const handleSubmit = () => {
    onAddTask(id, { title: taskTitle });
    setTaskTitle('');
    setTaskDescription('');
  };

  const disabled = !taskTitle;

  return (
    <div className={`rounded border pt-4 px-4 flex-1 m-2 bg-${color}-100`}>
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="flex">
        <input
          className="flex-1 border mr-2"
          type="text"
          value={taskTitle}
          onChange={handleChange}
        />
        <button
          className={`flex-1 border rounded ${disabled && 'text-gray-300'}`}
          disabled={disabled}
          onClick={handleSubmit}
          type="button"
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          onRemoveTask={handleRemoveTask}
          {...task}
        />
      ))}
    </div>
  );
};
