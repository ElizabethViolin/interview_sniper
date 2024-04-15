import React from 'react';
import { Input } from '../components/ui/input';

export default function NetworkPage() {
  return (
    <main className='w-full flex justify-center h-screen bg-gradient-to-r from-blue-700 to-blue-700 to-transparent to-blue-700'>
      <div className='w-1/2 h-40 border border-black rounded-xl mt-10 p-10 text-white'>
        <Input className='w-full' placeholder='Post your interview experience...' />
      </div>
    </main>
  );
}
