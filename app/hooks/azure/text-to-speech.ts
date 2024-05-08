import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import { useCallback } from 'react';

export const useTextToSpeech = () => {
  const speak = useCallback((text: string) => {
    const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY!;
    const serviceRegion = process.env.NEXT_PUBLIC_AZURE_SERVICE_REGION!;
    const speechConfig = SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechSynthesisVoiceName = 'en-US-AndrewMultilingualNeural';

    const audioConfig = AudioConfig.fromDefaultSpeakerOutput();
    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

    const ssmlText = `<speak version='1.0' xml:lang='en-US'>
                        <voice name='${speechConfig.speechSynthesisVoiceName}'>
                            <prosody rate='30%'>${text}</prosody>
                        </voice>
                      </speak>`;

    synthesizer.speakSsmlAsync(ssmlText, result => {
      if (result) {
        console.log('Audio synthesis succeeded');
      }
      synthesizer.close();
    }, error => {
      console.error('Error synthesizing text:', error);
      synthesizer.close();
    });
  }, []);

  return speak;
};
