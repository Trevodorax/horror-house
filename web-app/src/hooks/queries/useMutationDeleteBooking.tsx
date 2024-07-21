import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

export const DeleteBookingSchema = z.object({
	id: z.string().uuid(),
});

export type DeleteBookingDto = z.infer<typeof DeleteBookingSchema>;

export const useMutationDeleteBooking = () => {
	return useMutation({
		mutationFn: async (id: string): Promise<void> => {
			const response = await query.delete(`bookings/${id}`);

			if (!response.ok) {
				const data = await response.json();
				const error = ErrorSchema.parse(data);
				toast.error(error.message);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
		},
	});
};
