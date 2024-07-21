import { UserInfo, UserInfoSchema } from '@/types/User'
import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { query } from './kySetup'

export const useQueryGetMe = (): UseQueryResult<UserInfo | null, Error> => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async (): Promise<UserInfo | null> => {
        try {
          const response = query.get('users/me')
          const data = await response.json()
          return UserInfoSchema.parse(data)
        } catch {
          return null
        }
    }
  })
}
