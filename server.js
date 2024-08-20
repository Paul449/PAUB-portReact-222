import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv'; // Use import for consistency

dotenv.config(); // Load environment variables

const App = express();
const PORT = process.env.PORT || 3010;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files
App.use(express.static(path.join(__dirname, 'dist')));

// Route to serve index.html
App.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
        if (err) {
            res.status(500).send("Error loading page.");
            console.error(err);
        }
    });
});

// Start the app on the configured port
App.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
