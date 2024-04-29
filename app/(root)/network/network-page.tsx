'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePostMutation } from '../../hooks/post-mutation'
import Questions from './components/questions'
import TransparentTextarea from '../../components/ui/transparent-textarea'
import { PaperAirplaneIcon } from '@heroicons/react/16/solid'
import Posts from '../../components/posts'

export default function Network() {
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')
  const [questions, setQuestions] = useState([{ text: '' }])
  const { data: session } = useSession()
  const postMutation = usePostMutation(session)

  const resetForm = () => {
    setCompanyName('')
    setDescription('')
    setQuestions([{ text: '' }])
  }

  const handleSubmit = () => {
    if (!session) {
      alert('You must be logged in to submit posts.')
      return
    }
    postMutation.mutate(
      { companyName, description, questions },
      {
        onSuccess: () => {
          resetForm()
        },
      }
    )
  }

  return (
    <main className="h-full w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 px-16 md:px-0">
      <div className="flex flex-col justify-center items-center py-10">
        <div className="flex flex-col justify-between h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl p-10 space-y-5 text-white">
          <TransparentTextarea
            className="text-lg"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TransparentTextarea
            placeholder="Share your interview experience..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Questions questions={questions} setQuestions={setQuestions} />
          <PaperAirplaneIcon
            onClick={handleSubmit}
            className="animated-icon self-end"
          />
        </div>
        <Posts />
      </div>
    </main>
  )
}
