import { z } from "zod";

export const SessionSchema = z.object({
	id: z.string().uuid(),
	theme: z.string(),
	title: z.string(),
	description: z.string(),
	durationMinutes: z.number(),
	minNbParticipants: z.number(),
});

export type Session = z.infer<typeof SessionSchema>;
