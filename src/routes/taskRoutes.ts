import { Router } from 'express';

import { getTask, getTasks, addTask, editTask, deleteTask } from '../controllers/taskController.js';

const router = Router();

router.get('/task/:id', (req, res) => {
  getTask(req, res);
});

router.get('/task', (_, res) => {
  getTasks(res);
});

router.post('/task', (req, res) => {
  addTask(req, res);
});

router.put('/task/:id', (req, res) => {
  editTask(req, res);
});

router.delete('/task/:id', (req, res) => {
  deleteTask(req, res);
});

export default router;
