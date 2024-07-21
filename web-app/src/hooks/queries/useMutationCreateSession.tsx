import { SessionSchema } from "@/types/Session";
import type { Session } from "@/types/Session";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

export const CreateSessionSchema = z.object({
	theme: z.string(),
	title: z.string(),
	description: z.string(),
	durationMinutes: z.number(),
	minNbParticipants: z.number(),
});

export type CreateSessionDto = z.infer<typeof CreateSessionSchema>;

export const useMutationCreateSession = () => {
	return useMutation({
		mutationFn: async (dto: CreateSessionDto): Promise<Session | null> => {
			const response = await query.post("sessions", {
				json: dto,
			});

			const data = await response.json<Session>();

			if (response.ok) {
				return SessionSchema.parse(data);
			}
			const error = ErrorSchema.parse(data);
			toast.error(error.message);
			return null;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["sessions"] });
		},
	});
};
