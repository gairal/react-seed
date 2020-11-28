interface Task {
  id: string;
  title: string;
}

interface Lane {
  id: string;
  title: string;
  tasks: Task[];
}

export interface State {
  lanes: Lane[];
}
