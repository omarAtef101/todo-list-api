import { FileHandler } from './helpers.js';

import type { Task } from '../models/taskModel.js';

const fileHandler = FileHandler.getInstance();

export const readTasks = (): Task[] | undefined => {
  const data = fileHandler.readFile('localdb/tasks.json');
  const json = JSON.parse(data);

  if (json) return json;

  return undefined;
};

export const readTask = (id: number): Task[] | undefined => {
  const data = fileHandler.readFile('localdb/tasks.json');
  const json = JSON.parse(data);

  if (json) return json.find((task: Task) => task.id === id);

  return undefined;
};

export const writeTasks = (data: Task[]) => {
  const tasks = JSON.stringify(data, null, 2);
  fileHandler.writeFile('localdb/tasks.json', tasks);
};
