import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static("./static"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static/views/index.html"));
});

app.get("/challenges.html", (req, res) => {
    res.sendFile(path.join(__dirname, "static/views/challenges.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});