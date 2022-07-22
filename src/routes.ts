import { candidatesController } from './controllers/candidates-controller';
import express from 'express';
const router = express.Router();

router.get( '/', (req, res) => res.json({ hello: 'Hello World!'}) );

router.get('/candidates', candidatesController.index);
router.get('/candidates/:id', candidatesController.show);
router.post('/candidates', candidatesController.create);
router.put('/candidates/:id', candidatesController.update);
router.delete('/candidates/:id', candidatesController.delete);

export {router}