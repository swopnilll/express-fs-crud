import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello first server </h1>")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server is active"));