'use client'

import React from 'react';
import Posts from '../../components/posts';
import TransparentTextarea from '../../components/ui/transparent-textarea';
import { useFetchUserData } from '../../hooks/fetch-user';

export default function Account() {
    const { userData, isLoading, error } = useFetchUserData();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

  return (
    <>
      <div className="h-fit w-full max-w-3xl bg-[rgba(229,229,229,0.2)] rounded-xl mt-10 p-10 space-y-5">
        {userData && (
          <>
            <TransparentTextarea placeholder="Email" value={userData.email} />
            <TransparentTextarea placeholder="Phone Number" value={userData.phone_number} />
          </>
        )}
      </div>
      <TransparentTextarea
        className="text-center text-xl font-thin text-white mt-10"
        value="Your Posts"
        readOnly
      />
      <Posts userOnly={true} />
    </>
  );
}
