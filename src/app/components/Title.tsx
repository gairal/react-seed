import React, { FC } from 'react';

import styles from './Title.module.css';

export const Title: FC = ({ children }) => (
  <h1 className="text-3xl p-2">
    {children}
    <span className={`${styles.title} text-blue-600`}>TEST</span>
  </h1>
);
