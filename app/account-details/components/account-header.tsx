"use client"

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountHeader() {
  const pathname = usePathname();

  const bgColor = (path: string) => {
    return pathname === path ? 'bg-[rgba(229,229,229,0.3)]' : 'hover:bg-[rgba(229,229,229,0.3)]';
  };

  return (
    <>
      <div className='flex flex-col h-fit w-full max-w-3xl  rounded-xl p-7 space-y-5 text-gray-200'>
        <TextareaAutosize rows={1} maxRows={2} className='w-full text-center bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0 text-2xl' placeholder='Profile Name' /> 
        <TextareaAutosize rows={4} maxRows={20} className='w-full text-center bg-transparent border-none resize-none outline-none border-none focus:outline-none focus:ring-0' placeholder='Add headline...' /> 
      </div>
      <div className='flex h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] p-1.5 rounded-xl mt-10'>        
        <Link href={'/account-details'} className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details')}`}>
          Account
        </Link>
        <Link href={'/account-details/interviews'} className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details/interviews')}`}>
          Interviews
        </Link>
        <Link href={'/account-details/collection'} className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details/collection')}`}>
          Collection
        </Link>
      </div>
    </>
  );
}
