import { z } from 'zod';

export const CreateBookingSchema = z.object({
  startTime: z.string().datetime(),
  nbParticipants: z.number(),
  clientEmail: z.string().email(),
  sessionId: z.string().uuid(),
});

export const DeleteBookingSchema = z.object({
  id: z.string().uuid(),
});

export type CreateBookingDto = z.infer<typeof CreateBookingSchema>;
export type DeleteBookingDto = z.infer<typeof DeleteBookingSchema>;
