import LoginForm from '@/app/(auth)/login/LoginForm'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>Register Page</h1>
      <div className='flex justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}
