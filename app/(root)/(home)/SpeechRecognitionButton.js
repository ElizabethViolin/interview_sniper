'use client'

import React from 'react'
import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
} from 'microsoft-cognitiveservices-speech-sdk'

const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY
const serviceRegion = process.env.NEXT_PUBLIC_AZURE_SERVICE_REGION

const SpeechRecognitionButton = () => {
  const startRecognition = () => {
    const speechConfig = SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    )
    speechConfig.speechRecognitionLanguage = 'en-US'

    const audioConfig = AudioConfig.fromDefaultMicrophoneInput()
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig)

    recognizer.recognizeOnceAsync(
      (result) => {
        console.log(`RECOGNIZED: Text=${result.text}`)
        processText(result.text)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  const processText = (text) => {
    console.log('Processing text:', text)
    // Additional implementation to send text to your backend or other processing
  }

  return (
    <h1
      onClick={startRecognition}
      className="flex justify-center pt-16 cursor-pointer transition-all duration-300 ease-in-out hover:tracking-widest text-md md:text-2xl text-white"
    >
      What is the profession you are interviewing for?
    </h1>
  )
}

export default SpeechRecognitionButton
