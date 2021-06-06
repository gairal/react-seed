import { Col } from '../types';

export interface AppContextState {
  addItem: (colId: string, title: string) => void;
  data: Col[];
  removeItem: (colId: string, cellId: string) => void;
}
