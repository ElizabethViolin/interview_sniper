"use client"

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useFetchUserData } from '../../hooks/fetch-user'; 
import { useSpeechRecognition } from '../../hooks/azure/speech-to-text';
import { useTextToSpeech } from '../../hooks/azure/text-to-speech';
import { fetchConfig } from '../../lib/fetchConfig';  

interface ApiResponse {
  responseText: string;
}

const InterviewButton: React.FC = () => {
  const { userData } = useFetchUserData();
  const [displayText, setDisplayText] = useState('Tell me about yourself.');
  const { data: session } = useSession();
  const startRecognition = useSpeechRecognition({
    onResult: (text: string) => {
      console.log('User response:', text);
      if (userData && userData.profession) {
        sendResponseToBackend(text.trim(), userData.profession);
      } else {
        console.log('Profession is not available.');
      }
    },
    onError: (error: string) => console.error('Speech recognition error:', error)
  });
  const speak = useTextToSpeech();

  const sendResponseToBackend = async (userResponse: string, profession: string) => {
    if (!session) {
      console.log("Session is null, user might not be logged in.");
      return;
    }
    
    try {
      const data: ApiResponse | null = await fetchConfig('generate_interview_response', session, {
        method: 'POST',
        body: JSON.stringify({ response: userResponse, profession }),
      });

      if (data) {
        setDisplayText(data.responseText);
        speak(data.responseText);
      } else {
        console.log('No response from server');
      }
    } catch (error) {
      console.error('Error processing speech:', error);
    }
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <h1
        className="text-md md:text-2xl cursor-pointer text-white text-center mx-5 md:mx-20 lg:mx-40"
        onClick={startRecognition}
      >
        {displayText}
      </h1>
    </div>
  );
};

export default InterviewButton;
