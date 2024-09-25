export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskProp {
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface TaskBase {
  title: string;
}
