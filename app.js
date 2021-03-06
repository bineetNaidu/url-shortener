/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import router from './routes/router.js';

const app = express();

mongoose
  .connect('mongodb://localhost:27017/url-shortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MONGODB Started'))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 4242, () => console.log('Server has started'));
