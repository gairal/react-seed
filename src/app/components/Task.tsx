import { Task } from '@app/types';
import React from 'react';

interface Props extends Task {}

export const TaskComponent = ({ title }: Props) => (
  <div className="task">{title}</div>
);
