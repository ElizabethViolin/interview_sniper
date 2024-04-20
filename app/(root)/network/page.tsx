"use client"

import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import Posts from '../../components/posts';
import Questions from './components/questions';
import TransparentTextarea from '../../components/ui/transparent-textarea';

export default function NetworkPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='flex flex-col justify-center items-center py-10'>
        <div className='flex flex-col justify-between h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl p-10 space-y-5 text-white'>
          <TransparentTextarea className='text-lg' placeholder='Company name' /> 
          <TransparentTextarea placeholder='Share your interview experience...' /> 
          <Questions />
          <PaperAirplaneIcon className='animated-icon self-end'/>
        </div>
        <Posts />
      </div>
    </main>
  );
}
