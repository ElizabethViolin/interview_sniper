"use client"

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function ProfilePage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <div className='flex flex-col h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl p-7'>
          <div className='space-y-5 text-white'>
            <TextareaAutosize rows={1} maxRows={2} className='w-full text-center bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-2xl' placeholder='Profile Name' /> 
            <TextareaAutosize rows={4} maxRows={20} className='w-full text-center bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' placeholder='Add headline...' /> 
          </div>
        </div>
        <div className='flex h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] p-1.5 rounded-xl mt-10'>        
          <span className='w-full h-full p-1.5 rounded-xl cursor-pointer text-center hover:bg-[rgba(229,229,229,0.3)]'>
            Your Posts
          </span>
          <span className='w-full h-full p-1.5 rounded-xl cursor-pointer text-center hover:bg-[rgba(229,229,229,0.3)]'>
            Saved Posts
          </span>
        </div>
        <div className='flex flex-col h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
          <div className='space-y-5 text-white'>
            <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-lg' value='Amazon' readOnly /> 
            <TextareaAutosize rows={4} maxRows={20} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' value='The interview began with a deep dive into my previous projects, particularly focusing on my contributions to high-scale web applications. I was asked to elaborate on specific decisions regarding the architecture and choice of technologies. This was followed by several coding problems that tested my proficiency in data structures and algorithms, with an emphasis on optimizing for performance and scalability. One memorable question involved designing a recommendation system similar to the one used by Netflix, which required a good understanding of machine learning algorithms and data streaming. The interviewers were particularly interested in how I handle edge cases and manage data consistency across distributed systems. The final part of the session was a system design challenge where I had to propose a scalable microservices architecture for a new feature that could handle millions of users simultaneously.' readOnly /> 
          </div>
      </div>
      </div>
    </main>
  );
}
