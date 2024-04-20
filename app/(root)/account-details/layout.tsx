import type { Metadata } from 'next'
import '../../globals.css'
import LogoutButton from './components/logout-button'
import AccountHeader from './components/account-header'

export const metadata: Metadata = {
  title: 'Interview Sniper',
  description:
    'Prepare for your next interview with tailored questions and resources.',
}

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="w-full bg-gradient-to-r from-blue-700 to-transparent to-blue-700 py-10 px-16 md:px-0">
      <div className="w-full flex flex-col justify-center items-center">
        <AccountHeader />
        {children}
        <LogoutButton />
      </div>
    </main>
  )
}
