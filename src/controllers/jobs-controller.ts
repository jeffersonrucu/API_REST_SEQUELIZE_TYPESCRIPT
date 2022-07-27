import { Request, Response } from 'express';
import { Job, Company } from '../models';

const jobsController = {
    index: async (req: Request, res: Response) => {
        try {
            const jobs = await Job.findAll({ include: 'company' });
            return res.json(jobs);
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
            }
        }
    },

    create: async (req: Request, res: Response) => {
        const { title, description, limitDate, companyId } = req.body

        try {
            const job = await Job.create({
                title,
                description,
                limitDate,
                companyId,
            })
    
            return res.status(201).json(job)
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const company = await Company.findByPk(id, { include: 'jobs' });
            return res.json(company);
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message });
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { title, description, limitDate, companyId } = req.body

        try {
            const [affectedRows, jobs] = await Job.update({
                title,
                description,
                limitDate,
                companyId,
            }, {
                where: { id },
                returning: true
            })
    
            return res.json(jobs[0])
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Job.destroy({
                where: { id: id }
            })
    
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },
}

export { jobsController }