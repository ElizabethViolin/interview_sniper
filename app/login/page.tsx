"use client"

import React from 'react';
import TransparentTextarea from '../components/ui/transparent-textarea';
import { Separator } from '../components/ui/separator';
import { Button } from '../components/ui/button';

export default function LoginPage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-blue-700 bg-gradient-to-r from-black via-transparent to-black opacity-75 background-blend-multiply font-thin'>
      <span className='mb-10 text-lg text-white'>Welcome to Interview Sniper</span>
      <div className='w-80 text-gray-200'>
        <TransparentTextarea placeholder='Email' />
        <Separator className='bg-gray-300 mb-8 mt-2'/>
        <TransparentTextarea placeholder='Password' />
        <Separator className='bg-gray-300 mt-2'/>
      </div>
      <div>
        <Button className='bg-[rgba(229,229,229,0.1)] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out mt-10 border border-white text-white'>Sign In</Button>
      </div>
    </main>
  );
}
