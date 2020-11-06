import React, { FC } from 'react';

interface Props {
  title: string;
}

export const Card: FC<Props> = ({ title }) => (
  <div className="card">
    <h3 className="header">{title}</h3>
    <div className="content">TEST</div>
  </div>
);
