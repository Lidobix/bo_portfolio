import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(9090, () => {
  console.log('serveur démarré sur le port 9090');
});

app.get('/', (req, res) => {
  console.log('appel reçu');
  res.json('coucou');
});
