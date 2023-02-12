import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `serveur démarré sur le port ${process.env.REACT_APP_SERVER_PORT}`
  );
});

app.use('/', (req, res) => {
  console.log('appel reçu');
  res.json('coucou');
});
