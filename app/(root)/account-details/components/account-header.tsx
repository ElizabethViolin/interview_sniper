'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TransparentTextarea from '@/app/components/ui/transparent-textarea'
import { useFetchUserData } from '../../../hooks/user-hooks'

export default function AccountHeader() {
  const { userData, isLoading, error } = useFetchUserData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const pathname = usePathname()

  const bgColor = (path: string) => {
    return pathname === path
      ? 'bg-[rgba(229,229,229,0.3)]'
      : 'hover:bg-[rgba(229,229,229,0.3)]'
  }

  return (
    <>
      <div className="flex flex-col h-fit w-full max-w-3xl rounded-xl p-7 space-y-5 text-gray-200">
        {userData && (
          <>
            <TransparentTextarea
              className="text-2xl text-center"
              placeholder="Profile Name"
              value={userData.first_name + ' ' + userData.last_name}
            />
            <TransparentTextarea
              className="text-center"
              placeholder="Add headline..."
              value={userData.headline}
            />
          </>
        )}
      </div>
      <div className="flex h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] p-1.5 rounded-xl mt-10">
        <Link
          href={'/account-details'}
          className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details')}`}
        >
          Account
        </Link>
        <Link
          href={'/account-details/interviews'}
          className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details/interviews')}`}
        >
          Interviews
        </Link>
        <Link
          href={'/account-details/collection'}
          className={`w-full h-full p-1.5 rounded-xl cursor-pointer text-center ${bgColor('/account-details/collection')}`}
        >
          Collection
        </Link>
      </div>
    </>
  )
}
