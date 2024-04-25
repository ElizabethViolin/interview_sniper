import "next-auth"

declare module "next-auth" {
  interface User {
    access?: string;
    accessTokenExpiry?: number;
    refresh?: string;
  }
}

// Defines the structure of the session object used in the application
declare module "next-auth" {
  interface Session {
    user?: {
      email: string
      first_name?: string
      last_name?: string
      phone_number?: string
      headline?: string
    } & Partial<User>;
    accessToken?: string;
    accessTokenExpiry?: number;
    error?: string;
  }
}

// Defines the structure of user data retrieved from the API
export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  headline?: string;
}

// Used for hooks or components to manage the state of data fetching
export interface FetchState<T> {
  userData: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Defines the structure of post data retrieved from the API
export interface PostData {
  id: number; 
  created_by: string; 
  company_name: string;
  description: string;
  created_at: string; 
  updated_at: string;
}

export interface PostsArray {
  posts: PostData[];
}