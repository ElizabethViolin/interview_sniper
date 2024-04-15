import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function Post() {
  return (
    <>
      <div className='h-fit w-1/2 flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
        <div className='space-y-5 text-white'>
          <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-lg' value='Netflix' readOnly /> 
          <TextareaAutosize rows={4} maxRows={20} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' value='The interview began with a deep dive into my previous projects, particularly focusing on my contributions to high-scale web applications. I was asked to elaborate on specific decisions regarding the architecture and choice of technologies. This was followed by several coding problems that tested my proficiency in data structures and algorithms, with an emphasis on optimizing for performance and scalability. One memorable question involved designing a recommendation system similar to the one used by Netflix, which required a good understanding of machine learning algorithms and data streaming. The interviewers were particularly interested in how I handle edge cases and manage data consistency across distributed systems. The final part of the session was a system design challenge where I had to propose a scalable microservices architecture for a new feature that could handle millions of users simultaneously.' readOnly /> 
        </div>
      </div>
      <div className='flex flex-col h-fit w-1/2 bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
        <div className='space-y-5 text-white'>
          <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-lg' value='Amazon' readOnly /> 
          <TextareaAutosize rows={4} maxRows={20} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' value='The interview began with a deep dive into my previous projects, particularly focusing on my contributions to high-scale web applications. I was asked to elaborate on specific decisions regarding the architecture and choice of technologies. This was followed by several coding problems that tested my proficiency in data structures and algorithms, with an emphasis on optimizing for performance and scalability. One memorable question involved designing a recommendation system similar to the one used by Netflix, which required a good understanding of machine learning algorithms and data streaming. The interviewers were particularly interested in how I handle edge cases and manage data consistency across distributed systems. The final part of the session was a system design challenge where I had to propose a scalable microservices architecture for a new feature that could handle millions of users simultaneously.' readOnly /> 
        </div>
      </div>
    </>
  );
}
