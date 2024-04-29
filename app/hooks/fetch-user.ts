import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'
import { fetchConfig } from '../lib/fetchConfig'
import { UserData } from '../types/user'

export function useFetchUserData() {
  const { data: session } = useSession()

  const fetchUserData = async () => {
    if (!session) {
      return null
    }
    const data = await fetchConfig<UserData>('users/me/', session)
    return data
  }

  const {
    data: userData,
    isLoading,
    error,
  } = useQuery<UserData | null, Error>(['userData', session], fetchUserData, {
    enabled: !!session,
    onError: (error) => {
      console.error('Failed to fetch user data:', error)
    },
  })

  return { userData, isLoading, error }
}
