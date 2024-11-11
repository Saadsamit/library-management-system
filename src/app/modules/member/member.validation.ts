import { z } from 'zod';

export const memberValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    membershipDate: z.string(),
  }),
});

export const memberUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    membershipDate: z.string().optional(),
  }),
});
