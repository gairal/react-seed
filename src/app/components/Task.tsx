import React from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
}

interface Props extends Task {
  onRemoveTask: (id: string) => void;
}

export const TaskComponent = ({
  description,
  id,
  onRemoveTask,
  title,
}: Props) => {
  const handleClick = () => {
    onRemoveTask(id);
  };

  return (
    <div className="rounded bg-gray-200 p-2 my-4 relative">
      <button
        className="rounded px-1 bg-gray-700 text-white absolute top-2 right-2"
        type="button"
        onClick={handleClick}
      >
        x
      </button>
      <div>
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
