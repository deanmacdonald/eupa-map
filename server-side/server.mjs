import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apicache from 'apicache';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cache = apicache.middleware;

app.use(cache('5 minutes')); // Cache responses for 5 minutes

// Serve static files from the client-side/public directory
app.use(express.static(path.join(__dirname, '../client-side/public')));

// Default route to serve `index.html`
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-side/public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
