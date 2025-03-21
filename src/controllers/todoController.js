import todos from '../models/todoModel.js';
import { z } from 'zod';

// Schema validasi menggunakan Zod
const todoSchema = z.object({
  title: z.string().min(1, 'Title tidak boleh kosong'),
  completed: z.boolean().optional(),
});

// Get all todos
export const getTodos = (c) => {
  return c.json(todos);
};

// Create a new todo
export const createTodo = async (c) => {
  const body = await c.req.json();
  const validation = todoSchema.safeParse(body);

  if (!validation.success) {
    return c.json({ error: validation.error.errors }, 400);
  }

  const newTodo = {
    id: todos.length + 1,
    title: body.title,
    completed: body.completed || false,
  };

  todos.push(newTodo);
  return c.json(newTodo, 201);
};

// Update a todo
export const updateTodo = async (c) => {
  const id = parseInt(c.req.param('id'));
  const body = await c.req.json();
  const validation = todoSchema.safeParse(body);

  if (!validation.success) {
    return c.json({ error: validation.error.errors }, 400);
  }

  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return c.json({ error: 'Todo tidak ditemukan' }, 404);
  }

  todos[todoIndex] = { ...todos[todoIndex], ...body };
  return c.json(todos[todoIndex]);
};

// Delete a todo
export const deleteTodo = (c) => {
  const id = parseInt(c.req.param('id'));
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return c.json({ error: 'Todo tidak ditemukan' }, 404);
  }

  const deletedTodo = todos.splice(todoIndex, 1);
  return c.json(deletedTodo);
};