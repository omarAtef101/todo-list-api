import type { Task, TaskProp, TaskBase } from '../models/taskModel.js';

export const isTask = (data: any): data is Task =>
  typeof data.id === 'number' && typeof data.title === 'string' && typeof data.completed === 'boolean';

export const isTaskProp = (data: any): data is TaskProp =>
  typeof data.title === 'string' || typeof data.completed === 'boolean';

export const isTaskBase = (data: any): data is TaskBase => typeof data.title === 'string';
