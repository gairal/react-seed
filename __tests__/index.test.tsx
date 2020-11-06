import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { App } from '@app/index';

describe('App', () => {
  afterEach(cleanup);

  const subject = () => render(<App />);

  it('matches snapshot', () => {
    const { asFragment } = subject();

    expect(asFragment()).toMatchSnapshot();
  });
});
