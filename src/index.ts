import path from 'node:path';
import { router } from './router';
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3003;

    app.use('/uploads', express.static (path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('Erro ao conectar no mongodb'));





