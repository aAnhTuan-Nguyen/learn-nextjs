'use client'

import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import React, { useEffect } from 'react'

export default function Profile() {
  const { token } = useAppContext()

  useEffect(() => {
    const fetchRequest = async () => {
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

      return data
    }

    fetchRequest()
  }, [token])
  return <div>Profile</div>
}
