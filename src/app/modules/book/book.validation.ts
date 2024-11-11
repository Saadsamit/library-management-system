import { z } from 'zod';

export const bookValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    genre: z.string(),
    publishedYear: z.number(),
    totalCopies: z.number().min(1),
    availableCopies: z.number().min(1),
  }),
});

export const bookupdateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    genre: z.string().optional(),
    publishedYear: z.number().optional(),
    totalCopies: z.number().min(1).optional(),
    availableCopies: z.number().min(1).optional(),
  }),
});

