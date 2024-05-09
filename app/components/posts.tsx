import React from 'react'
import {
  BookmarkIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline'
import {
  BookmarkIcon as BookmarkSolid,
  HandThumbUpIcon as HandThumbUpSolid,
  HandThumbDownIcon as HandThumbDownSolid,
} from '@heroicons/react/16/solid'
import TransparentTextarea from '../components/ui/transparent-textarea'
import { useFetchPosts } from '../hooks/fetch-posts'
import {
  useToggleBookmark,
  useToggleReaction,
} from '../hooks/post-interactions'
import { PostData } from '../types/post'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'

interface PostsProps {
  userOnly?: boolean
  bookmarkedOnly?: boolean
}

const Posts: React.FC<PostsProps> = ({
  userOnly = false,
  bookmarkedOnly = false,
}) => {
  const { posts, isLoading, error } = useFetchPosts(userOnly, bookmarkedOnly)
  const session = useSession() as { data: Session | null }
  const { mutate: toggleBookmark } = useToggleBookmark(session.data)
  const { mutate: toggleReaction } = useToggleReaction(session.data)

  if (isLoading) return <div className="text-center py-4">Loading...</div>
  if (error)
    return (
      <div className="text-center text-red-500 py-4">
        Error fetching posts: {error.message}
      </div>
    )
  if (!posts || posts.length === 0)
    return <div className="text-center py-4">No posts found.</div>

  const handleBookmarkToggle = (postId: number) => {
    toggleBookmark(postId)
  }

  const handleReactionToggle = (postId: number, type: 'like' | 'dislike') => {
    toggleReaction({ postId, reactionType: type })
  }

  return (
    <>
      {posts.map((post: PostData, index: number) => (
        <div
          key={index}
          className="h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 font-thin"
        >
          <div className="flex justify-between">
            <TransparentTextarea
              className="text-lg text-white"
              value={post.company_name}
              readOnly
            />
            {post.is_bookmarked ? (
              <BookmarkSolid
                className="animated-icon"
                onClick={() => handleBookmarkToggle(post.id)}
              />
            ) : (
              <BookmarkIcon
                className="animated-icon"
                onClick={() => handleBookmarkToggle(post.id)}
              />
            )}
          </div>
          <TransparentTextarea
            className="text-gray-300"
            value={post.description}
            readOnly
          />
          <div className="flex flex-col space-y-4">
            {post.questions &&
              post.questions.map((question, qIndex) => (
                <div key={qIndex} className="flex space-x-4">
                  <span>{qIndex + 1}.</span>
                  <TransparentTextarea
                    className="text-white"
                    value={question.text}
                    readOnly
                  />
                </div>
              ))}
          </div>
          <div className="flex space-x-4">
            {post.user_reaction === 'like' ? (
              <HandThumbUpSolid
                className="animated-icon"
                onClick={() => handleReactionToggle(post.id, 'like')}
              />
            ) : (
              <HandThumbUpIcon
                className="animated-icon"
                onClick={() => handleReactionToggle(post.id, 'like')}
              />
            )}
            {post.user_reaction === 'dislike' ? (
              <HandThumbDownSolid
                className="animated-icon"
                onClick={() => handleReactionToggle(post.id, 'dislike')}
              />
            ) : (
              <HandThumbDownIcon
                className="animated-icon"
                onClick={() => handleReactionToggle(post.id, 'dislike')}
              />
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default Posts
