import { z } from "zod";

export const BookingSchema = z.object({
	id: z.string().uuid(),
	startTime: z.string().datetime(),
	nbParticipants: z.number(),
	clientEmail: z.string().email(),
	session: z.object({
		id: z.string().uuid(),
		theme: z.string(),
		title: z.string(),
		description: z.string(),
		durationMinutes: z.number(),
		minNbParticipants: z.number(),
	}),
});

export type Booking = z.infer<typeof BookingSchema>;
