import { type Booking, BookingSchema } from "@/types/Booking";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

export const CreateBookingSchema = z.object({
	startTime: z.string().datetime(),
	nbParticipants: z.number(),
	clientEmail: z.string().email(),
	sessionId: z.string().uuid(),
});

export type CreateBookingDto = z.infer<typeof CreateBookingSchema>;

export const useMutationCreateBooking = () => {
	return useMutation({
		mutationFn: async (dto: CreateBookingDto): Promise<Booking | null> => {
			const response = await query.post("bookings", {
				json: dto,
			});

			const data = await response.json<Booking>();

			if (response.ok) {
				return BookingSchema.parse(data);
			}
			const error = ErrorSchema.parse(data);
			toast.error(error.message);
			return null;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
		},
	});
};
