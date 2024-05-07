// src/types/user.ts
export interface User {
  access?: string;
  accessTokenExpiry?: number;
  refresh?: string;
}

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  headline?: string;
  profession?: string;
}
