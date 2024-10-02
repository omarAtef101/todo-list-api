import { readTasks, readTask, writeTasks } from '../utils/database.js';

import type { TaskProp, Task, TaskBase } from '../models/taskModel.js';

export const fetchAllTasks = () => readTasks();

export const fetchSingleTask = (id: number) => readTask(id);

export const addNewTask = async (data: TaskBase) => {
  const tasks = await readTasks();

  if (tasks) {
    let id = tasks.length + 1;

    while (tasks[tasks.length - 1]?.id === id) id++;

    const newTask: Task = {
      id: tasks.length + 1,
      title: data.title,
      completed: false,
    };

    tasks.push(newTask);

    return writeTasks(tasks);
  }
};

export const modifyTask = async (taskId: number, data: TaskProp) => {
  const tasks = await readTasks();

  if (tasks) {
    let taskToModify: Task | any;

    const filteredTasks = tasks.filter((task: Task) => {
      if (task?.id !== taskId) {
        return task;
      }
      taskToModify = task;
      return false;
    });

    if (taskToModify) {
      if (taskToModify.title) taskToModify.title = data.title;
      if (taskToModify.completed) taskToModify.completed = data?.completed;

      filteredTasks.push(taskToModify);

      return writeTasks(filteredTasks);
    }
  }
};

export const removeTask = async (taskId: number) => {
  const tasks = await readTasks();

  if (tasks) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);

    return writeTasks(filteredTasks);
  }
};
