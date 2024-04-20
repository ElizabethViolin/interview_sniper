import Login from './login-page'
import React from 'react'

type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>
}

const LoginPage = (props: Props) => {
  return (
    <Login
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  )
}

export default LoginPage
