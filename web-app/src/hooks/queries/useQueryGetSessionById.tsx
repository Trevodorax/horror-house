import { SessionSchema } from "@/types/Session";
import type { Session } from "@/types/Session";
import { useQuery } from "@tanstack/react-query";
import { query } from "./kySetup";

export const useQueryGetSessionById = (id: string) => {
	return useQuery({
		queryKey: ["sessions", id],
		queryFn: async (): Promise<Session> => {
			const response = await query.get(`sessions/${id}`);
			const data = await response.json();
			return SessionSchema.parse(data);
		},
		enabled: !!id,
	});
};
