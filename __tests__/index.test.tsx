import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { App } from '../src/app';

describe('App', () => {
  afterEach(cleanup);

  const subject = () => render(<App />);

  it('matches snapshot', () => {
    const { asFragment } = subject();

    expect(asFragment()).toMatchSnapshot();
  });
});
