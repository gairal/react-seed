import { useReducer } from 'react';

import { State } from './types';

enum ActionType {
  Initial = 'performInitialValidation',
  AddTitle = 'add new title',
}

type Action =
  | { type: ActionType.Initial }
  | { type: ActionType.AddTitle; payload: { title: string } };

const reducer = (state: State, action: Action): State => {
  const newState: State = { ...state };

  switch (action.type) {
    case ActionType.AddTitle:
      break;
    default:
  }

  return newState;
};

const createInitialState = (defaultState: Partial<State> = {}) =>
  reducer(defaultState as State, { type: ActionType.Initial });

export const useApp = (): State => {
  const [state] = useReducer(
    reducer,
    createInitialState({
      title: 'React Seed',
    })
  );

  return state;
};
