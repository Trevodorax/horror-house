import { EmployeeInfo, EmployeeInfoSchema } from '@/types/EmployeeInfo'
import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import ky from 'ky'

export const useQueryGetEmployees = (): UseQueryResult<EmployeeInfo, Error> => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: async (): Promise<EmployeeInfo> => {
        const response = ky.get('http://localhost:3000/employees')
        const data = await response.json()
        return EmployeeInfoSchema.parse(data)
    }
  })
}
