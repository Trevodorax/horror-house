import {z} from 'zod'

export const EmployeeInfoSchema = z.object({
    email: z.string()
})

export type EmployeeInfo = z.infer<typeof EmployeeInfoSchema>
