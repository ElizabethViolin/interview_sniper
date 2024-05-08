"use client"

import React from 'react';
import { useFetchInterviews } from '../../../hooks/fetch-interviews'; 

export default function InterviewsPage() {
  const { interviews, isLoading, error } = useFetchInterviews();
  console.log(interviews)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <>
      {interviews && interviews.map((interview, index) => (
        <div key={index} className="h-fit w-full max-w-3xl flex flex-col bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5 font-thin">
          <span className="text-lg text-white">Sniper's Question:</span>
          <span className="text-gray-300">{interview.question}</span>
          <span className="text-lg text-white">Your Response:</span>
          <span className="text-gray-300">{interview.response}</span> 
        </div>
      ))}
      {!interviews || interviews.length === 0 && <div>No interviews found.</div>}
    </>
  );
}
