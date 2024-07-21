import { type UserInfo } from "@/types/User";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";

export const DeleteUserSchema = z.object({
	id: z.string()
});

type DeleteUserDto = z.infer<typeof DeleteUserSchema>;

export const useMutationDeleteUser = () => {
	return useMutation({
		mutationFn: async (dto: DeleteUserDto): Promise<string> => {
			const response = await query.delete(`users/${dto.id}`, {
				json: dto,
			});

			const data = await response.json<UserInfo>();

			return data.id
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});
};
