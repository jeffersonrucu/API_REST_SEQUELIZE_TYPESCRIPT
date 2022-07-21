import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import {router} from './routes';
app.use(router);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log('Started!')
});