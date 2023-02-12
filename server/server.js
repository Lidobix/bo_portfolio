import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const dbCol = process.env.COLLECTION_PROJECTS;
const mongoClient = new MongoClient(dbUrl);

function fetchDatas() {
  return new Promise((resolve, reject) => {
    mongoClient
      .connect()
      .then(() => {
        console.log('à la recgherche');
        return mongoClient.db(dbName).collection(dbCol).find({}).toArray();
      })
      .then((datas) => {
        resolve(datas);
      })
      .catch((reason) => {
        console.error(reason);
        reject;
      });
  });
}

app.use('/', (req, res) => {
  console.log('appel reçu');
  fetchDatas().then((datas) => {
    console.log(datas);
    res.json(datas);
  });
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `serveur démarré sur le port ${process.env.REACT_APP_SERVER_PORT}`
  );
});
