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
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const candidate = await Candidate.findByPk(id);

            if(candidate === null) {
                return res.status(400).json('Candidato não existe ' + id);
            }

            return res.status(200).json(candidate);
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { name, bio, email,phone,openToWork } = req.body;
        const { id } = req.params;

        try {
            const candidate = await Candidate.findByPk(id);
            
            if (candidate === null) {
                return res.status(404).json({ message: 'Candidato não encontrado' });
            }

            candidate.name = name;
            candidate.bio = bio;
            candidate.email = email;
            candidate.phone = phone;
            candidate.openToWork = openToWork;
            candidate.save();

            return res.status(200).json(candidate);
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            await Candidate.destroy({ where: { id } })
            return res.status(204).json({message: 'Candidato deletado'});
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
}