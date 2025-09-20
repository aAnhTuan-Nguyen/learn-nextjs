import RegisterForm from '@/app/(auth)/register/RegisterForm'

export default function RegisterPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>Register Page</h1>
      <div className='flex justify-center'>
        <RegisterForm />
      </div>
    </div>
  )
}
