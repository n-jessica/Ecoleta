import express from 'express';
import routes from './routes';

const app = express(); //variável app do tipo app que é = express

app.use(express.json());
app.use(routes);


app.listen(3333); 