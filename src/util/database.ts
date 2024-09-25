import { promises as fs } from 'fs';

import type { Task } from '../models/taskModel.js';

export const readTasks = async (id: number | undefined = undefined): Promise<Task[] | undefined> => {
  const data = await fs.readFile('localdb/tasks.json', 'utf-8');
  const json: [] = JSON.parse(data);

  if (id) return json.find((task: Task) => task.id === id);

  return json;
};

export const writeTasks = (data: Task[]) => {
  const tasks = JSON.stringify(data, null, 2);

  return fs.writeFile('localdb/tasks.json', tasks);
};
