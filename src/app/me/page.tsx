import Profile from '@/app/me/Profile'
import envConfig from '@/config'
import { cookies } from 'next/headers'

export default async function MeProfile() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  const payload = await res.json()

  const data = {
    status: res.status,
    payload
  }

  if (!res.ok) {
    throw data
  }

  console.log('data in me page', data)

  return (
    <div>
      <h1>Me Profile Page</h1>
      <div>{data.payload.data.name}</div>
      <div>{data.payload.data.email}</div>
      <Profile />
    </div>
  )
}
