import { useReducer } from 'react';
import { CardStatus, State } from './types';

enum ActionType {
  Initial = 'performInitialValidation',
  AddCard = 'add new card',
  RemoveCard = 'remove card',
  ChangeCardStatus = 'ChangeCardStatus',
}

type Action =
  | { type: ActionType.Initial }
  | { type: ActionType.AddCard; payload: { title: string } }
  | { type: ActionType.RemoveCard; payload: { id: string } }
  | {
      type: ActionType.RemoveCard;
      payload: { id: string; status: CardStatus };
    };

const reducer = (state: State, action: Action): State => {
  const newState: State = { ...state };

  switch (action.type) {
    case ActionType.AddCard:
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
          title: 'col1',
          cards: [
            { title: 'card1', status: CardStatus.Open },
            { title: 'card2', status: CardStatus.Open },
            { title: 'card3', status: CardStatus.Open },
          ],
        },
        {
          title: 'col2',
          cards: [
            { title: 'card1', status: CardStatus.Open },
            { title: 'card2', status: CardStatus.Open },
            { title: 'card3', status: CardStatus.Open },
          ],
        },
      ],
    })
  );

  return state;
};
