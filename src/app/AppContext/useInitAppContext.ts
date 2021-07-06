import { useState } from 'react';

import type { AppContextState } from './types';

export const useInitAppContext = (): AppContextState => {
  const [content] = useState('context test');

  return { content };
};
