import { router } from "@/router";
import { setTokenAction } from "@/store/authSlice/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { z } from "zod";
import { query } from "./kySetup";
import { queryClient } from "./queryClient";
import { ErrorSchema } from "./types";

interface Credentials {
	email: string;
	password: string;
}

const LoginResponseSchema = z.object({
	token: z.string(),
});

export const useMutationLogIn = () => {
	return useMutation({
		mutationFn: async (
			credentials: Credentials,
		): Promise<z.infer<typeof LoginResponseSchema> | null> => {
			const response = await query.post("auth/login", {
				json: credentials,
			});

			const data = await response.json();

			if (response.ok) {
				return LoginResponseSchema.parse(data);
			}
			const error = ErrorSchema.parse(data);
			toast.error(error.message);
			return null;
		},
		onSuccess: (data) => {
			if (data === null) {
				return;
			}

			setTokenAction({ token: data.token });
			queryClient.invalidateQueries({ queryKey: ["me"] });
			router.navigate("/sessions");
		},
	});
};
