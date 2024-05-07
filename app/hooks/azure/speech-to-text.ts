import { SpeechConfig, AudioConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
import { useCallback } from 'react';

type UseSpeechRecognitionProps = {
  onResult: (text: string) => void,
  onError: (error: string) => void
};

export const useSpeechRecognition = ({ onResult, onError }: UseSpeechRecognitionProps) => {
  const startRecognition = useCallback(() => {
    const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY!;
    const serviceRegion = process.env.NEXT_PUBLIC_AZURE_SERVICE_REGION!;
    const speechConfig = SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(result => {
      onResult(result.text);
    }, error => {
      onError(error);
    });
  }, [onResult, onError]);

  return startRecognition;
};
