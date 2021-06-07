export interface Task {
  description: string;
  id: string;
  title: string;
}

export interface Column {
  id: string;
  items: Task[];
  title: string;
}

export interface AppContextState {
  addColumn: (title: string) => void;
  addTask: (colId: string, title: string) => void;
  columns: Column[];
  removeTask: (colId: string, id: string) => void;
}
