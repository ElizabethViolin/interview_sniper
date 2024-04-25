import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { fetchConfig } from '../lib/fetchConfig';
import { PostData } from '../types/types';  

export function useFetchBookmarks() {
  const { data: session } = useSession();
  const [bookmarks, setBookmarks] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchBookmarks() {
      if (!session) {
        setBookmarks([]);
        return;
      }
      setIsLoading(true);
      try {
        const url = 'bookmarks/';
        const data = await fetchConfig(url, session) as PostData[];
        setBookmarks(data);
      } catch (error) {
        console.error('Failed to fetch bookmarks:', error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBookmarks();
  }, [session]);

  return { bookmarks, isLoading, error };
}
