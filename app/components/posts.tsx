import React from 'react'
import {
  BookmarkIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import {
  BookmarkIcon as BookmarkSolid,
  HandThumbUpIcon as HandThumbUpSolid,
  HandThumbDownIcon as HandThumbDownSolid,
} from '@heroicons/react/16/solid'
import TransparentTextarea from '../components/ui/transparent-textarea'
import { useFetchPosts } from '../hooks/post-hooks';
import { PostData } from '../types/types';

const Posts = ({ userOnly = false }) => {
  const { posts, isLoading, error } = useFetchPosts(userOnly);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  return (
    <>
      {posts.map((post: PostData, index: number) => (
        <div key={index} className="h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 font-thin">
          <div className="flex justify-between">
            <TransparentTextarea className="text-lg text-white" value={post.company_name} readOnly />
            {post.is_bookmarked ? (
              <BookmarkSolid className="animated-icon" />
            ) : (
              <BookmarkIcon className="animated-icon" />
            )}
          </div>
          <TransparentTextarea className="text-gray-300" value={post.description} readOnly />
          {/* <div className="flex flex-col space-y-4">
            {questions.map((question, index) => (
              <>
                <div className="flex space-x-4">
                  <span>1.</span>
                  <TransparentTextarea
                    className="text-white"
                    value={postData.questions}
                  />
                </div>
              </>
            ))}
          </div> */}
          <div className="flex space-x-4">
            {post.user_reaction === 'like' ? (
              <HandThumbUpSolid className="animated-icon" />
            ) : (
              <HandThumbUpIcon className="animated-icon" />
            )}
            {post.user_reaction === 'dislike' ? (
              <HandThumbDownSolid className="animated-icon" />
            ) : (
              <HandThumbDownIcon className="animated-icon" />
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default Posts;
