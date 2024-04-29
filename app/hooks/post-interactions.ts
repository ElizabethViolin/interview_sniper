import { useMutation, useQueryClient } from 'react-query'
import { fetchConfig } from '../lib/fetchConfig'
import { Session } from '../types/session'
import { ReactionInput } from '../types/post'

export function useToggleBookmark(session: Session | null) {
  const queryClient = useQueryClient()

  return useMutation(
    async (postId: number) => {
      if (!session) {
        throw new Error('Session is required to toggle bookmark')
      }
      if (!postId) {
        throw new Error('Post ID is undefined')
      }
      const url = `bookmarks/${postId}/toggle/`
      return await fetchConfig(url, session, { method: 'POST' })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
      },
    }
  )
}

export function useToggleReaction(session: Session | null) {
  const queryClient = useQueryClient()

  return useMutation(
    async ({ postId, reactionType }: ReactionInput) => {
      if (!session) {
        throw new Error('Session is required to toggle reaction')
      }
      if (!postId) {
        throw new Error('Post ID is undefined')
      }
      const url = `reactions/${postId}/toggle/`
      return await fetchConfig(url, session, {
        method: 'POST',
        body: JSON.stringify({ reaction_type: reactionType }),
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
      },
    }
  )
}
