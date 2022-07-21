import { candidatesController } from './controllers/candidates-controller';
import express from 'express';
const router = express.Router();

router.get( '/', (req, res) => res.json({ hello: 'Hello World!'}) );

router.get('/candidates', candidatesController.index)

router.post('/candidates', candidatesController.save)

export {router}