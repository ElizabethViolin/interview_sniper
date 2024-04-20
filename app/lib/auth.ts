type User = {
  id: string;
  name: string;
  email: string;
};

type LoginFn = (username: string, password: string) => Promise<User | null>;

const DRF_LOGIN_URL = 'http://localhost:8000/api/token/';

export const login: LoginFn = async (username, password) => {
  try {
    const response = await fetch(DRF_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, 
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status} - ${response.statusText}`);
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};
