import { Session } from "next-auth"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchConfig<T>(
  endpoint: string,
  session: Session,
  options: RequestInit = {}
): Promise<T | null> {
  const url = `${BASE_URL}/${endpoint}`
  const headers = new Headers({
    Authorization: `Bearer ${session.accessToken ?? ''}`,
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  })

  const config = {
    ...options,
    headers,
  }

  try {
    const response = await fetch(url, config)

    if (response.status === 204) {
      return null
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return response.json()
    } else {
      return null
    }
  } catch (error) {
    console.error('Failed to fetch:', error)
    throw error
  }
}
