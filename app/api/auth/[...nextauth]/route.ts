import { login } from '@/app/lib/auth'
import { User } from '@/app/types/user'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) return null
        try {
          const user = await login(credentials.username, credentials.password)
          return user
        } catch (e) {
          console.error(e)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // This will only be executed at login. Each next invocation will skip this part.
        token.accessToken = (user as User).access;
        token.accessTokenExpiry = (user as User).accessTokenExpiry;
        token.refreshToken = (user as User).refresh;
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.accessTokenExpiry = token.accessTokenExpiry as number;
        session.error = token.error as string;
      }
      return session;
    }
  },
})

export { handler as GET, handler as POST }
