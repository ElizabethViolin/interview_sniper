import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetchConfig } from '../lib/fetchConfig'
import { PostData } from '../types/types'

export function useFetchQuestions(postId: number) {
  const { data: session } = useSession()
  const [questions, setQuestions] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchQuestions() {
      if (!session) {
        setQuestions([])
        return
      }
      setIsLoading(true)
      try {
        const url = `questions/`
        const data = (await fetchConfig(url, session)) as PostData[]
        setQuestions(data)
      } catch (error) {
        console.error('Failed to fetch questions:', error)
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchQuestions()
  }, [postId, session])

  return { questions, isLoading, error }
}
