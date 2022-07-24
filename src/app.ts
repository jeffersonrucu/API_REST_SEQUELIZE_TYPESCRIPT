import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json'

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));     

import {router} from './routes';
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log('Started!')
});