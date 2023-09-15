import express from 'express';
import cors from 'cors';

import exampleRouter from './routes/example.route.js';
import { PORT } from './config/environment.js';

const app = express();

// ---------- Middlewares ----------
app.use(cors());

// ---------- Routes ---------------
app.use('/', exampleRouter);

// ---------- Start server ---------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})