import type { AppContextState } from './types';

export const useInitAppContext = (): AppContextState => {
  return { content: 'context test' };
};
