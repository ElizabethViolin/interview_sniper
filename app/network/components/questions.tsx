import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import TransparentTextarea from '@/app/components/ui/transparent-textarea';

export default function Questions() {
  const [questions, setQuestions] = useState<string[]>(['']); 

  const handleAddQuestion = () => {
    setQuestions([...questions, '']); 
  };

  const handleRemoveQuestion = (index: number) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index)); 
    }
  };

  return (
    <div className='flex flex-col space-y-4'>
      {questions.map((question, index) => (
        <div key={index} className='flex space-x-4 items-center'>
          <MinusCircleIcon
            className={`h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110 ${questions.length <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => {
              if (questions.length > 1) {
                handleRemoveQuestion(index);
              }
            }}
          />
          <TransparentTextarea
            className='text-white'
            placeholder={`Question ${index + 1}`}
            value={question}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index] = e.target.value;
              setQuestions(newQuestions);
            }}
          />
        </div>
      ))}
      <div className='flex justify-start'>
        <PlusCircleIcon
          className="h-6 w-6 cursor-pointer text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          onClick={handleAddQuestion}
        />
      </div>
    </div>
  );
}
