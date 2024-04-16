"use client"

import React from 'react';
import AccountHeader from '../components/account-header';
import Post from '@/app/network/components/post';

export default function AccountPostsPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <AccountHeader />
        <Post />
      </div>
    </main>
  );
}
