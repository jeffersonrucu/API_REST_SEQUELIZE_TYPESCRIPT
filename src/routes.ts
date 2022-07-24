import { candidatesController } from './controllers/candidates-controller';
import { companiesController } from './controllers/companies-controller';

import express from 'express';
const router = express.Router();

router.get( '/', (req, res) => res.json({ hello: 'Hello World!'}) );

router.get('/candidates', candidatesController.index);
router.get('/candidates/:id', candidatesController.show);
router.post('/candidates', candidatesController.create);
router.put('/candidates/:id', candidatesController.update);
router.delete('/candidates/:id', candidatesController.delete);

router.get('/companies', companiesController.index)
router.get('/companies/:id', companiesController.show)
router.post('/companies', companiesController.create)
router.put('/companies/:id', companiesController.update)
router.delete('/companies/:id', companiesController.delete)

export {router}