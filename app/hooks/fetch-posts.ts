import { useQuery } from 'react-query'
import { useSession } from 'next-auth/react'

import { fetchConfig } from '../lib/fetchConfig'
import { PostData } from '../types/post'

export function useFetchPosts(userOnly = false, bookmarkedOnly = false) {
  const { data: session } = useSession()

  const fetchPosts = async (): Promise<PostData[]> => {
    if (!session) return []
    let url = 'posts/'
    if (userOnly) {
      url += '?mine=true'
    } else if (bookmarkedOnly) {
      url += '?bookmarked=true'
    }
    const result = await fetchConfig<PostData[]>(url, session)
    return result || []
  }

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(['posts', userOnly, bookmarkedOnly, session], fetchPosts, {
    enabled: !!session,
    keepPreviousData: true,
    staleTime: 5000,
    onError: (err) => {
      console.error('Failed to fetch posts:', err)
    },
  })

  return { posts, isLoading, error: error as Error | null }
}
