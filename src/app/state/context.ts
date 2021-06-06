import { createContext, useContext } from 'react';

export interface TrelloContextState {
  addItem: (colId: string, title: string) => void;
  removeItem: (colId: string, cellId: string) => void;
}

export const TrelloContext = createContext<TrelloContextState>({
  addItem: () => undefined,
  removeItem: () => undefined,
});
export const useTrelloContext = () => useContext(TrelloContext);
