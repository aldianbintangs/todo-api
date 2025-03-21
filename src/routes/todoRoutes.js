import { Hono } from 'hono';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController.js';

const todoRoutes = new Hono();

todoRoutes.get('/', getTodos);
todoRoutes.post('/', createTodo);
todoRoutes.put('/:id', updateTodo);
todoRoutes.delete('/:id', deleteTodo);

export default todoRoutes;