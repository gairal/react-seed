export interface Cell {
  id: string;
  title: string;
}

export interface Col {
  id: string;
  tasks: Cell[];
  title: string;
}

export interface AppContextState {
  addTaskToColumn: (columnId: string, taskTitle: string) => void;
  content: Col[];
  removeTaskFromColumn: (columnId: string, taskId: string) => void;
}
