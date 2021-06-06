import React from 'react';

import { Col } from '../types';
import { Cell } from '../Cell';
import './Column.scss';

interface Props extends Col {}

export const Column = ({ id, items, title }: Props) => {
  return (
    <section className="column">
      <header>{title}</header>
      {items.map((cel) => (
        <Cell key={cel.id} colId={id} {...cel} />
      ))}
    </section>
  );
};
