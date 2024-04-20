import React from 'react';

export default function InterviewsPage() {
  return (
    <main className='h-fit max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 font-thin'>
      <span className='text-lg text-white'>Question:</span>
      <span className='text-gray-300'>Can you describe a time when you had to handle a conflict in the workplace? How did you manage it?</span>
      <span className='text-lg text-white'>Your Response:</span>
      <span className='text-gray-300'>In one of my previous roles as a project manager, there was a significant conflict between two team members over the direction of a project. One believed in taking a more innovative, risky approach, while the other favored a traditional, safer path. Both parties were passionate and had valid points, but the disagreement was stalling the project.<br/>I addressed the conflict by arranging a mediation session where each team member could present their case in a structured manner. Before the meeting, I met with each individual privately to understand their concerns and perspectives fully. During the session, I facilitated a discussion that focused on the project's goals, not personal opinions or preferences.</span>
    </main>
  );
}
