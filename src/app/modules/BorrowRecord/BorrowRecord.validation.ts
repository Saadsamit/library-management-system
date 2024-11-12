import { z } from 'zod';

export const BorrowValidationSchema = z.object({
  body: z.object({
    bookId: z.string(),
    memberId: z.string(),
  }),
});

export const ReturnValidationSchema = z.object({
  body: z.object({
    borrowId: z.string(),
  }),
});
