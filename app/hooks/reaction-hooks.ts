import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { fetchConfig } from '../lib/fetchConfig';
import { PostData } from '../types/types';  

export function useFetchReactions() {
  const { data: session } = useSession();
  const [reactions, setReactions] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchReactions() {
      if (!session) {
        setReactions([]);
        return;
      }
      setIsLoading(true);
      try {
        const url = 'reactions/';
        const data = await fetchConfig(url, session) as PostData[];
        setReactions(data);
      } catch (error) {
        console.error('Failed to fetch reactions:', error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReactions();
  }, [session]);

  return { reactions, isLoading, error };
}
