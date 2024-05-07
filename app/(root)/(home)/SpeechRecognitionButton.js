'use client'

import React, { useState, useEffect } from 'react'
import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
} from 'microsoft-cognitiveservices-speech-sdk'
import { useFetchUserData } from '../../hooks/fetch-user' // Adjust the import path as necessary
import { useSession } from 'next-auth/react'

const SpeechRecognitionButton = () => {
  const { userData, isLoading, error } = useFetchUserData()
  const [displayText, setDisplayText] = useState('Tell me about yourself.')
  const { data: session } = useSession()

  const handleSpeechRecognition = () => {
    const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY
    const serviceRegion = process.env.NEXT_PUBLIC_AZURE_SERVICE_REGION
    const speechConfig = SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    )
    speechConfig.speechRecognitionLanguage = 'en-US'

    const audioConfig = AudioConfig.fromDefaultMicrophoneInput()
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig)

    recognizer.recognizeOnceAsync(
      (result) => {
        console.log('User response:', result.text)
        if (userData && userData.profession) {
          sendResponseToBackend(result.text.trim(), userData.profession)
        } else {
          console.log('Profession is not available.')
        }
      },
      (error) => {
        console.error('Speech recognition error:', error)
      }
    )
  }

  const sendResponseToBackend = (userResponse, profession) => {
    fetch('http://localhost:8000/api/generate_interview_response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.accessToken ?? ''}`,
      },
      credentials: 'include',
      body: JSON.stringify({ response: userResponse, profession }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setDisplayText(data.responseText)
      })
      .catch((error) => {
        console.error('Error processing speech:', error)
      })
  }

  return (
    <div className="flex flex-col items-center pt-16">
      <h1
        className="text-md md:text-2xl text-white cursor-pointer"
        onClick={handleSpeechRecognition}
      >
        {displayText}
      </h1>
    </div>
  )
}

export default SpeechRecognitionButton
