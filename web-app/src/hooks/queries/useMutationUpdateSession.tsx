import { SessionSchema } from "@/types/Session";
import type { Session } from "@/types/Session";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

export const UpdateSessionSchema = z.object({
	id: z.string().uuid(),
	theme: z.string().optional(),
	title: z.string().optional(),
	description: z.string().optional(),
	durationMinutes: z.number().optional(),
	minNbParticipants: z.number().optional(),
});

export type UpdateSessionDto = z.infer<typeof UpdateSessionSchema>;

export const useMutationUpdateSession = () => {
	return useMutation({
		mutationFn: async (dto: UpdateSessionDto): Promise<Session | null> => {
			const response = await query.put(`sessions/${dto.id}`, {
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
