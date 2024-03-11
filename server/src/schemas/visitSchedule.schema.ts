import { z } from 'zod';
import { contactFormSchema } from './contactFormSchema';

export const visitScheduleSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    date: z.date(),
    time: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    landmark: z.string(),
    contactForm: contactFormSchema.nullable(),
    contactFormId: z.number().positive().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const createVisitScheduleSchema = visitScheduleSchema.omit({ id: true });

export const updateVisitScheduleSchema = createVisitScheduleSchema.partial();
