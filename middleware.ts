export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/account-details',
    '/account-details/collection',
    '/account-details/interviews'
  ],
}
