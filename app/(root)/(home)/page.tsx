import React from 'react'
import Image from 'next/image'
import SpeechRecognitionButton from './SpeechRecognitionButton'

export default function HomePage() {
  return (
    <main className="h-screen bg-blue-700 bg-gradient-to-r from-black via-transparent to-black opacity-75 background-blend-multiply">
      <SpeechRecognitionButton />
      <div className="fixed inset-x-0 bottom-0 flex justify-center animate-slow-wiggle">
        <Image src={'/assistant.png'} alt={''} width={350} height={300} />
      </div>
    </main>
  )
}
