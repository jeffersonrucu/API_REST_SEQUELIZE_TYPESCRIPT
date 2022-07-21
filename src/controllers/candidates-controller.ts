import { Request, Response } from 'express';
import { Candidate } from '../models/candidate';

export const candidatesController = {
    index: async (req: Request, res: Response) => {
        const candidates = await Candidate.findAll()
        return res.json(candidates)
    },

    create: async (req: Request, res: Response) => {
        const { name, bio, email,phone,openToWork } = req.body;

        try {
            const candidates = await Candidate.create({
                name,
                bio,
                email,
                phone,
                openToWork
            })

            return res.status(201).json(candidates);
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}