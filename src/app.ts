import { Candidate } from './models/candidate';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app    = express();
const router = express.Router();

router.get( '/', (req, res) => res.json({ hello: 'Hello World!'}) );

router.get('/candidates', async (req, res) => {
    const candidates = await Candidate.findAll()
    return res.json(candidates)
})


app.use(router);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log('Started!')
})