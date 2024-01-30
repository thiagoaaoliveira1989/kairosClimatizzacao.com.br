import { z } from 'zod';

import { mailSchema } from '../schemas/mail.schemas';

export type TSendEmail = z.infer<typeof mailSchema>