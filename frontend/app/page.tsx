import React from 'react';
import Image from "next/image"
import { NavBar } from '@/components/nav-bar';

export default function Home() {
  return (
    <main className='h-screen bg-blue-700 bg-gradient-to-r from-black via-transparent to-black opacity-75 background-blend-multiply'>
      <span className='flex justify-center text-2xl text-gray-200 pt-16'>What is the profession you are interviewing for?</span>
      {/* <p className='fixed left-0 top-1/2 transform -translate-y-1/2 w-100 pl-5 font-thin text-gray-200 text-sm'>
        Welcome to Interview Sniper—your ultimate platform for mastering the art of interviews. Whether you're preparing for your first job interview or looking to sharpen your skills for that dream role, our AI-driven mock interviews offer a personalized practice environment to boost your confidence and competence. Dive into our community-driven blog, where you can share insights, experiences, and advice. Explore a wealth of real interview questions and firsthand accounts from fellow job seekers to better understand what to expect and how to excel. At Interview Sniper, we're here to help you aim higher and hit your target—every time.
      </p> */}
      <div className='fixed inset-x-0 bottom-0 flex justify-center'>
        <Image src={'/assistant.png'} alt={''} width={350} height={300}/>
      </div>
      <NavBar />
    </main>
  );
}
