import React from 'react';
import { Task as TaskType } from '../types';

type Props = TaskType;

export const Task = ({ title }: Props): JSX.Element => {
  return (
    <div className="task">
      <h3>{title}</h3>
    </div>
  );
};
