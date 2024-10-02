import type { Request, Response } from 'express';

import { isTaskBase, isTaskProp } from './helpers.js';
import { fetchAllTasks, fetchSingleTask, addNewTask, modifyTask, removeTask } from '../services/taskService.js';

export const getTask = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);
    const tasks = await fetchSingleTask(taskId);
    res.status(200).send(tasks);
  } catch (err) {
    console.error(err);
    res.status(400).send('Internal Server Error!');
  }
};

export const getTasks = async (res: Response) => {
  try {
    const tasks = await fetchAllTasks();
    res.status(200).send(tasks);
  } catch (err) {
    console.error(err);
    res.status(400).send('Internal Server Error!');
  }
};

export const addTask = async (req: Request, res: Response) => {
  const data = req.body;

  if (!isTaskBase(data)) {
    res.status(400).send("Invalid data provided. Please check the following fields: 'title'.");
    return;
  }

  try {
    await addNewTask(data);
    res.status(201).send('Successfully Added the Task.');
  } catch (err) {
    console.error(err);
    res.status(400).send('Internal Server Error!');
  }
};

export const editTask = async (req: Request, res: Response) => {
  const taskId = Number(req.params.id);
  const data = req.body;

  if (!isTaskProp(data)) {
    res.status(400).send("Invalid data provided. Please check the following fields: 'title' or 'completed'.");
    return;
  }

  try {
    await modifyTask(taskId, data);
    res.status(201).send('Successfully Modified the Task.');
  } catch (err) {
    console.error(err);
    res.status(400).send('Internal Server Error!');
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const taskId = Number(req.params.id);

  try {
    await removeTask(taskId);
    res.status(201).send('Successfully Removed the Task.');
  } catch (err) {
    console.error(err);
    res.status(400).send('Internal Server Error!');
  }
};
