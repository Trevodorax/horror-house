import { z } from "zod";

export enum UserRole {
	SUPER_ADMIN = "super_admin",
	ADMIN = "admin",
}

export const UserInfoSchema = z.object({
	fullName: z.string(),
	email: z.string(),
	role: z.enum([UserRole.ADMIN, UserRole.SUPER_ADMIN]),
});

export type UserInfo = z.infer<typeof UserInfoSchema>;
