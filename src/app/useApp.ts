import { nanoid } from 'nanoid';
import { useReducer } from 'react';

import { State, Task } from './types';

enum ActionType {
  Initial = 'performInitialValidation',
  AddTask = 'add new task in lane',
  AddLane = 'add lane',
}

type Action =
  | { type: ActionType.Initial }
  | {
      type: ActionType.AddTask;
      payload: { id: string; title: string };
    };

const reducer = (state: State, action: Action): State => {
  const newState: State = { ...state };

  switch (action.type) {
    case ActionType.AddTask: {
      const lane = newState.lanes.find(({ id }) => action.payload.id === id);
      lane?.tasks.push({ title: action.payload.title, id: nanoid() });
      break;
    }
    default:
  }

  return newState;
};

const createInitialState = (defaultState: Partial<State> = {}) =>
  reducer(defaultState as State, { type: ActionType.Initial });

export const useApp = (): any => {
  const [state, dispatch] = useReducer(
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

  const addLane = () => {
    return '';
  };
  const addTask = (laneId: string, task: Pick<Task, 'title'>) => {
    dispatch({
      payload: { id: laneId, title: task.title },
      type: ActionType.AddTask,
    });
  };

  return { state, addLane, addTask };
};
