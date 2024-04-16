"use client"

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import Post from './components/post';

export default function NetworkPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='flex flex-col justify-center items-center py-10'>
        <div className='flex flex-col justify-between h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl p-10 space-y-5 text-white'>
          <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-lg' placeholder='Company name' /> 
          <TextareaAutosize rows={4} maxRows={20} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' placeholder='Share your interview experience...' /> 
          <div className='self-end cursor-pointer transition duration-300 ease-in-out hover:scale-110 text-gray-300'>
            <PaperAirplaneIcon className='h-6 w-6'/>
          </div>
        </div>
        <Post />
      </div>
    </main>
  );
}
