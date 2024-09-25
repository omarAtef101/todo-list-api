import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(express.json());
app.use('/todos', taskRoutes);

export default app;
