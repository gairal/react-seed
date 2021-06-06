import React, { FC } from 'react';

export const Header: FC = ({ children }) => (
  <header>
    <h1 className="text-3xl p-2">{children}</h1>
    <hr className="border" />
  </header>
);
