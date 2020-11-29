import { useReducer } from 'react';
import { DEFAULT_STATE } from './constants';

import { MainState } from './types';

enum ActionType {
  Initial = 'perform initial validation',
  ChangeTitle = 'change app title',
}

const reducer = (
  state: MainState,
  action: {
    type: ActionType;
    payload: Record<string, any>;
  }
): MainState => {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.ChangeTitle:
      newState.title = action.payload.title;
      break;
    default:
  }

  return newState;
};

export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const changeTitle = (newTitle: string) => {
    dispatch({ type: ActionType.ChangeTitle, payload: { title: newTitle } });
  };

  return { changeTitle, state };
};
