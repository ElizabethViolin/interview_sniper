import React from 'react';
import { BookmarkIcon, HandThumbUpIcon, HandThumbDownIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid, HandThumbUpIcon as HandThumbUpSolid, HandThumbDownIcon as HandThumbDownSolid } from '@heroicons/react/16/solid';
import TransparentTextarea from '@/app/components/ui/transparent-textarea';

export default function Posts() {
  return (
    <div className='h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 font-thin'>
      <div className='flex justify-between'>
        <TransparentTextarea className='text-lg text-white' value='Amazon' readOnly /> 
        <BookmarkSolid className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
      </div>
      <TransparentTextarea className='text-gray-300' value='The interview began with a deep dive into my previous projects, particularly focusing on my contributions to high-scale web applications. I was asked to elaborate on specific decisions regarding the architecture and choice of technologies. This was followed by several coding problems that tested my proficiency in data structures and algorithms, with an emphasis on optimizing for performance and scalability. One memorable question involved designing a recommendation system similar to the one used by Netflix, which required a good understanding of machine learning algorithms and data streaming. The interviewers were particularly interested in how I handle edge cases and manage data consistency across distributed systems. The final part of the session was a system design challenge where I had to propose a scalable microservices architecture for a new feature that could handle millions of users simultaneously.' readOnly /> 
      <div className='flex flex-col space-y-4'>
        <div className='flex space-x-4'>
        <span>1.</span>
          <TransparentTextarea className='text-white' value='Tell me about yourself.' />
        </div>
        <div className='flex space-x-4'>
          <span>2.</span>
          <TransparentTextarea className='text-white' value='What is the biggest challenge you faced and how did you tackle it?' />
        </div>
      </div>
      <div className='flex space-x-4'>
        <HandThumbUpSolid className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
        <HandThumbDownIcon className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
      </div>
    </div>
  );
}
