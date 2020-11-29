import { Task } from '@app/types';
import React from 'react';

interface Props extends Task {
  onRemoveTask: (taskId: string) => void;
}

export const TaskComponent = ({ id, onRemoveTask, title }: Props) => {
  const handleRemoveTask = () => {
    onRemoveTask(id);
  };

  return (
    <div className="task flex justify-between">
      {title}
      <button type="button" onClick={handleRemoveTask}>
        x
      </button>
    </div>
  );
};
