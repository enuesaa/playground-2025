import { useState } from 'react'
import { authClient } from '../lib/auth-client'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signIn = async () => {
    await authClient.signIn.email(
      { email, password },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          console.log('a')
          router.push('/')
        },
        onError: (ctx) => {
          console.error(ctx.error)
        },
      },
    )
  }

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={signIn}>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Sign In</button>
      </form>
    </>
  )
}
