import { User, UserRole } from './users.entity';
import { z } from 'zod'

export const CreateUserSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  role: z.enum([UserRole.ADMIN, UserRole.SUPER_ADMIN]),
  password: z.string()
})

export type CreateUserDto = z.infer<typeof CreateUserSchema>

export const DeleteUserSchema = z.object({
  id: z.string()
})

export type DeleteUserDto = z.infer<typeof DeleteUserSchema>


export interface UserResponse {
  id: string
  email: string
  fullName: string
  role: UserRole
}

export function userToResponse(user: User) {
  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    role: user.role
  }
}
