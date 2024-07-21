import { useMutation } from "@tanstack/react-query"
import { query } from "./kySetup"
import { z } from "zod"
import { queryClient } from "./queryClient"
import { ErrorSchema } from "./types"
import toast from "react-hot-toast"
import { UserInfo, UserRole } from "@/types/User"

export const CreateUserSchema = z.object({
    email: z.string().email(),
    fullName: z.string(),
    role: z.enum([UserRole.ADMIN, UserRole.SUPER_ADMIN]),
    password: z.string()
})

type CreateUserDto = z.infer<typeof CreateUserSchema>

export const useMutationCreateUser = () => {
    return useMutation({
        mutationFn: async (dto: CreateUserDto): Promise<UserInfo | null> => {
            const response = await query.post('users', {
                json: dto
            })

            const data = await response.json<UserInfo>()

            if(response.ok) {
                return data
            } else {
                const error = ErrorSchema.parse(data)
                toast.error(error.message)
                return null
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}
