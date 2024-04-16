import React from 'react';
import { BookmarkIcon, HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid, HandThumbUpIcon as HandThumbUpSolid, HandThumbDownIcon as HandThumbDownSolid } from '@heroicons/react/16/solid';
import TextareaAutosize from 'react-textarea-autosize';

export default function Post() {
  return (
    <div className='h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 text-white'>
      <div className='flex justify-between'>
        <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-lg' value='Amazon' readOnly /> 
        <BookmarkSolid className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
      </div>
      <TextareaAutosize rows={4} maxRows={20} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' value='The interview began with a deep dive into my previous projects, particularly focusing on my contributions to high-scale web applications. I was asked to elaborate on specific decisions regarding the architecture and choice of technologies. This was followed by several coding problems that tested my proficiency in data structures and algorithms, with an emphasis on optimizing for performance and scalability. One memorable question involved designing a recommendation system similar to the one used by Netflix, which required a good understanding of machine learning algorithms and data streaming. The interviewers were particularly interested in how I handle edge cases and manage data consistency across distributed systems. The final part of the session was a system design challenge where I had to propose a scalable microservices architecture for a new feature that could handle millions of users simultaneously.' readOnly /> 
      <div className='flex space-x-4'>
        <HandThumbUpSolid className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
        <HandThumbDownIcon className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110" />
      </div>
    </div>
  );
}
