import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

export const useMutationDeleteSession = () => {
	return useMutation({
		mutationFn: async (id: string): Promise<void> => {
			const response = await query.delete(`sessions/${id}`);

			if (!response.ok) {
				const data = await response.json();
				const error = ErrorSchema.parse(data);
				toast.error(error.message);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["sessions"] });
		},
	});
};
