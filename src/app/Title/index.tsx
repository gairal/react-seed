import React, { FC } from 'react';

import './Title.scss';

export const Title: FC = ({ children }) => (
  <h1 className="text-3xl p-2 title">{children}</h1>
);
