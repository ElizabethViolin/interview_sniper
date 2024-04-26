import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { fetchConfig } from '../lib/fetchConfig'
import { PostData } from '../types/types'

export function useFetchPosts(userOnly = false, bookmarkedOnly = false) {
  const { data: session } = useSession()
  const [posts, setPosts] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      if (!session) {
        setPosts([])
        return
      }
      setIsLoading(true)
      try {
        let url = 'posts/'
        if (userOnly) {
          url += '?mine=true'
        } else if (bookmarkedOnly) {
          url += '?bookmarked=true'
        }
        const data = (await fetchConfig(url, session)) as PostData[]
        console.log(data)
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [session, userOnly, bookmarkedOnly])

  return { posts, isLoading, error }
}
