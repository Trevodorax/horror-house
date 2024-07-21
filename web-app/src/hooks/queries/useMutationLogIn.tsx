import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { query } from "./kySetup"
import { z } from "zod"
import { queryClient } from "./queryClient"
import { setTokenAction } from "@/store/authSlice/actions"

interface Credentials {
    email: string
    password: string
}

const LoginResponseSchema = z.object({
    token: z.string()
})

export const useMutationLogIn = (credentials: Credentials): UseMutationResult<z.infer<typeof LoginResponseSchema>, Error> => {
    return useMutation({
        mutationFn: async (): Promise<z.infer<typeof LoginResponseSchema>> => {
            const response = query.post('auth/login', {
            json: credentials
            })
            const data = await response.json()
            return LoginResponseSchema.parse(data)
        },
        onSuccess: (data) => {
            setTokenAction({token: data.token})
            queryClient.invalidateQueries({queryKey: ['me']})
        }
    })
}
