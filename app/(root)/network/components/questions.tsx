import React from 'react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import TransparentTextarea from '@/app/components/ui/transparent-textarea'
import { QuestionsProps } from '../../../types/post';

export default function Questions({ questions, setQuestions }: QuestionsProps) {
  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '' }]);
  };

  const handleRemoveQuestion = (index: number) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {questions.map((question, index) => (
        <div key={index} className="flex space-x-4 items-center">
          <MinusCircleIcon
            className={`animated-icon ${questions.length <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => {
              if (questions.length > 1) {
                handleRemoveQuestion(index);
              }
            }}
          />
          <TransparentTextarea
            className="text-white"
            placeholder={`Question ${index + 1}`}
            value={question.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index] = { text: e.target.value };
              setQuestions(newQuestions);
            }}
          />
        </div>
      ))}
      <div className="flex justify-start">
        <PlusCircleIcon className="animated-icon" onClick={handleAddQuestion} />
      </div>
    </div>
  )
}
