import React from 'react';
import Image from "next/image";

export default function HomePage() {
  return (
    <main className='h-screen bg-blue-700 bg-gradient-to-r from-black via-transparent to-black opacity-75 background-blend-multiply'>
      <h1 className="flex justify-center pt-16 cursor-pointer transition-all duration-300 ease-in-out hover:tracking-widest text-md md:text-2xl text-gray-200">
        What is the profession you are interviewing for?
      </h1>
      <div className='fixed inset-x-0 bottom-0 flex justify-center'>
        <Image src={'/assistant.png'} alt={''} width={350} height={300}/>
      </div>
    </main>
  );
}
