import express, { Application } from 'express';

const app: Application = express();

// server static files
app.use(express.json());
app.use(express.static('dist/public'));

app.use('/', (req, res) => {
  res.send('Ha ha');
});

export default app;
