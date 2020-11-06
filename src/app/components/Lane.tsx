import { Lane as LaneType } from '@app/types';
import React, { FC } from 'react';
import { Card } from './Card';

export const Lane: FC<LaneType> = ({ cards, title }) => (
  <div className="col">
    <h2 className="text-3xl header">{title}</h2>
    <ul className="content">
      {cards.map((props) => (
        <Card {...props} />
      ))}
    </ul>
  </div>
);
