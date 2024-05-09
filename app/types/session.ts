import 'next-auth';
import { User } from 'next-auth';

declare module 'next-auth' {
  export interface Session {
    user?: {
      email?: string | null;
      first_name?: string;
      last_name?: string;
      phone_number?: string;
      headline?: string;
      profession?: string; 
    } & Partial<User>;
    accessToken?: string;
    accessTokenExpiry?: number;
    expires: string;
    error?: string;
  }
}
