import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { fetchConfig } from '../lib/fetchConfig';
import { UserData } from '../types/types';

export function useFetchUserData() {
    const { data: session } = useSession();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null); 

    useEffect(() => {
        async function fetchUserData() {
            if (!session) {
                setUserData(null);
                return;
            }
            setIsLoading(true);
            try {
                const data = await fetchConfig<UserData>('users/me/', session);
                setUserData(data);
                console.log(userData)
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setError(error as Error); 
                setUserData(null);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUserData();
    }, [session]);

    return { userData, isLoading, error };
}
