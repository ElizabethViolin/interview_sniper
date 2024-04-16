"use client"

import React from 'react';
import AccountHeader from '../components/account-header';

export default function AccountInterviewsPage() {
  return (
    <main className='h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0'>
      <div className='w-full flex flex-col justify-center items-center py-10'>
        <AccountHeader />
        <div className='h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 text-white'>
          <span>Question:</span>
          <span className='text-gray-300 font-thin'>Can you describe a time when you had to handle a conflict in the workplace? How did you manage it?</span>
          <span>Your Response:</span>
          <span className='text-gray-300 font-thin'>In one of my previous roles as a project manager, there was a significant conflict between two team members over the direction of a project. One believed in taking a more innovative, risky approach, while the other favored a traditional, safer path. Both parties were passionate and had valid points, but the disagreement was stalling the project.<br/>I addressed the conflict by arranging a mediation session where each team member could present their case in a structured manner. Before the meeting, I met with each individual privately to understand their concerns and perspectives fully. During the session, I facilitated a discussion that focused on the project's goals, not personal opinions or preferences.</span>
        </div>
      </div>
    </main>
  );
}
