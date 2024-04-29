import { User } from "next-auth";

export interface Session {
  user?: {
    email?: string | null;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    headline?: string;
  } & Partial<User>;
  accessToken?: string;
  accessTokenExpiry?: number;
  expires: string;
  error?: string;
}
