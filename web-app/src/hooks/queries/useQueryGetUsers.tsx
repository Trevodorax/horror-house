import { type UserInfo, UserInfoSchema } from "@/types/User";
import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { query } from "./kySetup";

const UsersSchema = z.array(UserInfoSchema);

export const useQueryGetUsers = (): UseQueryResult<UserInfo[], Error> => {
	return useQuery({
		queryKey: ["users"],
		queryFn: async (): Promise<UserInfo[]> => {
			const response = query.get("users");
			const data = await response.json();
			return UsersSchema.parse(data);
		},
	});
};
