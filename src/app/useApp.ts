import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_STATE } from './constants';

import { MainState } from './types';

enum ActionType {
  Initial = 'perform initial validation',
  AddTask = 'add a task to a lane',
  RemoveTask = 'rm a task to a lane',
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
    case ActionType.AddTask: {
      const lane = newState.lanes.find(
        ({ id }) => id === action.payload.laneId
      );

      if (lane) {
        lane.tasks.push({ title: action.payload.title, id: uuidv4() });
      }

      break;
    }
    case ActionType.RemoveTask: {
      const lane = newState.lanes.find(
        ({ id }) => id === action.payload.laneId
      );

      if (lane) {
        lane.tasks = lane.tasks.filter(
          ({ id }) => id !== action.payload.taskId
        );
      }

      break;
    }
    default:
  }

  return newState;
};

export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const addTask = (laneId: string, task: { title: string }) => {
    dispatch({ type: ActionType.AddTask, payload: { laneId, ...task } });
  };

  const removeTask = (laneId: string, taskId: string) => {
    dispatch({ type: ActionType.RemoveTask, payload: { laneId, taskId } });
  };

  return { addTask, removeTask, state };
};
