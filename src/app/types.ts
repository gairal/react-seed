export interface Task {
  id: string;
  title: string;
}

export interface Lane {
  id: string;
  title: string;
  tasks: Task[];
}

export interface MainState {
  title: string;
  lanes: Lane[];
}
