import { AppContextState } from './context';

export const useInitAppContext = (): AppContextState => {
  return { content: 'context test' };
};
