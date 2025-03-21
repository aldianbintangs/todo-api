import { Hono } from 'hono';
import { serve } from 'bun';
import { config } from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

// Load environment variables
config();

const app = new Hono();

// Gunakan routes
app.route('/api/todos', todoRoutes);

// Jalankan server
const port = process.env.PORT || 3000;
console.log(`Server berjalan di http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port: port,
});