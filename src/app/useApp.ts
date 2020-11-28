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
      lanes: [
        {
          id: 'DEF&%',
          title: 'lane 1',
          tasks: [
            { id: 'ABNC', title: 'task 1' },
            { id: '1234', title: 'task 1' },
          ],
        },
        {
          id: 'DEFwdfwe',
          title: 'lane2',
          tasks: [
            { id: 'ABNC', title: 'task 1' },
            { id: '1234', title: 'task 1' },
          ],
        },
      ],
    })
  );

  return state;
};
