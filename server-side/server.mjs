// server.mjs
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import getPort from 'get-port';
import { createServer } from 'http';
import initializeSocket from './socketServer.js'; // Import socket server

import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import auth from './middleware/auth.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

console.log('Resolved path:', path.join(__dirname, '../client-side/build', 'index.html'));

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client-side/build')));
app.use(logger);
app.use(express.json());

const myCache = new NodeCache();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-side/build', 'index.html'));
});

app.get('/cache', (req, res) => {
  const value = myCache.get('key');
  if (value == undefined) {
    myCache.set('key', 'This is cached value');
    res.send('Cache was empty, set new value.');
  } else {
    res.send(`Cache Value: ${value}`);
  }
});

app.use('/secure', auth);

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong!');
});

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler); // Use errorhandler middleware in development
}

(async () => {
  const PORT = await getPort({ port: [3000, 3100] });

  const server = createServer(app); // Create an HTTP server
  initializeSocket(server); // Initialize socket.io

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
