import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'
import { fetchConfig } from '../lib/fetchConfig'
import { Interview } from '../types/interview'

export function useFetchInterviews() {
  const { data: session } = useSession()

  const fetchInterviews = async () => {
    if (!session) {
      return null
    }
    const data = await fetchConfig<Interview[]>('interviews/', session)
    return data
  }

  const {
    data: interviews,
    isLoading,
    error,
  } = useQuery<Interview[] | null, Error>(['interviews', session], fetchInterviews, {
    enabled: !!session, 
    onError: (error) => {
      console.error('Failed to fetch interviews:', error)
    },
  })

  return { interviews, isLoading, error }
}
