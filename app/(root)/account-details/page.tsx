"use client"

import React from 'react';
import AccountHeader from './components/account-header';
import Posts from '../network/components/posts';
import TransparentTextarea from '../../components/ui/transparent-textarea';

export default function AccountPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <AccountHeader />
        <div className='h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
          <TransparentTextarea placeholder='Email' /> 
          <TransparentTextarea placeholder='Phone Number' /> 
        </div>
        <TransparentTextarea className='text-center text-xl font-thin text-white mt-10' value='Your Posts' readOnly /> 
        <Posts />
      </div>
    </main>
  );
}
