import { type Booking, BookingSchema } from "@/types/Booking";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { query } from "./kySetup";

export const useQueryGetBookingsForSession = (sessionId: string) => {
	return useQuery({
		queryKey: ["bookings", sessionId],
		queryFn: async (): Promise<Booking[]> => {
			const response = await query.get(`bookings/session/${sessionId}`);
			const data = await response.json();
			return z.array(BookingSchema).parse(data);
		},
		enabled: !!sessionId,
	});
};
