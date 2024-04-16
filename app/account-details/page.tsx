"use client"

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AccountHeader from './components/account-header';
import Posts from '../network/components/posts';

export default function AccountPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <AccountHeader />
        <div className='h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
          <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' placeholder='Email' /> 
          <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' placeholder='Phone Number' /> 
        </div>
        <TextareaAutosize rows={1} maxRows={2} className='w-full bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-center text-xl font-thin text-white mt-10' value='Your Posts' readOnly /> 
        <Posts />
      </div>
    </main>
  );
}
