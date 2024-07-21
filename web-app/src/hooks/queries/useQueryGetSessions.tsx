import { type Session, SessionSchema } from "@/types/Session";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { query } from "./kySetup";

export const useQueryGetSessions = () => {
	return useQuery({
		queryKey: ["sessions"],
		queryFn: async (): Promise<Session[]> => {
			const response = await query.get("sessions");
			const data = await response.json();
			return z.array(SessionSchema).parse(data);
		},
	});
};
