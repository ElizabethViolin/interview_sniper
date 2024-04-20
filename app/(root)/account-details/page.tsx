"use client"

import React from 'react';
import Posts from '../../components/posts';
import TransparentTextarea from '../../components/ui/transparent-textarea';

export default function AccountPage() {
  return (
    <>
      <div className='h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5'>
        <TransparentTextarea placeholder='Email' /> 
        <TransparentTextarea placeholder='Phone Number' /> 
      </div>
      <TransparentTextarea className='text-center text-xl font-thin text-white mt-10' value='Your Posts' readOnly /> 
      <Posts />
    </>
  );
}
