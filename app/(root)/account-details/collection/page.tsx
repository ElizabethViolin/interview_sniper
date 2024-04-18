"use client"

import React from 'react';
import AccountHeader from '../components/account-header';
import Posts from '@/app/(root)/network/components/posts';

export default function AccountCollectionPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <AccountHeader />
        <Posts />
      </div>
    </main>
  );
}
